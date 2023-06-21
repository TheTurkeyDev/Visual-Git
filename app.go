package main

import (
	"context"
	"encoding/json"
	"fmt"
	"io"
	"log"
	"os"
	"path"
	"path/filepath"

	"github.com/wailsapp/wails/v2/pkg/runtime"

	"visual-git/git"
)

const (
	reposFile = "./data/repositories.json"
)

// App struct
type App struct {
	ctx   context.Context
	repos []git.LocalRepository
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx

	if _, err := os.Stat("./data"); os.IsNotExist(err) {
		fmt.Println("Data folder is missing! Generating now...")
		if err := os.Mkdir("./data", os.ModePerm); err != nil {
			log.Fatal(err)
		} else {
			fmt.Println("Data folder created!")
		}
	}

	if _, err := os.Stat(reposFile); os.IsNotExist(err) {
		fmt.Println("Repositories file is missing! Generating now...")
		if err := os.WriteFile(reposFile, []byte("[]\n"), os.ModePerm); err != nil {
			log.Fatal(err)
		} else {
			fmt.Println("Repository file created!")
		}
	}

	jsonFile, err := os.Open(reposFile)
	if err != nil {
		fmt.Println(err)
	}
	byteValue, _ := io.ReadAll(jsonFile)

	if err := json.Unmarshal(byteValue, &a.repos); err != nil {
		fmt.Println(err)
	}
	defer jsonFile.Close()
}

func (a *App) FileContents(parent string, filePath string) string {
	fileContent, err := os.ReadFile(path.Join(filepath.Dir(parent), filePath))
	if err != nil {
		log.Fatal(err)
		return ""
	}

	// Convert []byte to string
	text := string(fileContent)
	return text
}

func (a *App) GetRepos() []git.LocalRepository {
	return a.repos
}

func (a *App) UserSelectGitRepoFolder(onlyCreated bool) string {
	file, err := runtime.OpenDirectoryDialog(a.ctx, runtime.OpenDialogOptions{})
	if err != nil {
		fmt.Print("ERROR: ", err)
		return ""
	}

	if !onlyCreated {
		return file
	}

	entries, err := os.ReadDir(file)
	if err != nil {
		fmt.Print("ERROR: ", err)
		return ""
	}

	for _, e := range entries {
		if e.IsDir() && e.Name() == ".git" {
			return file
		}
	}
	return ""
}

func (a *App) UserAddGitRepo(name string, file string) *git.LocalRepository {
	entries, err := os.ReadDir(file)
	if err != nil {
		fmt.Print("ERROR: ", err)
		return nil
	}

	for _, e := range entries {
		if e.IsDir() && e.Name() == ".git" {

			newRepo := git.LocalRepository{
				Location: file,
				Name:     name,
			}
			a.repos = append(a.repos, newRepo)

			reposBytes, _ := json.Marshal(a.repos)
			if err := os.WriteFile(reposFile, reposBytes, os.ModePerm); err != nil {
				log.Fatal(err)
			}
			return &newRepo
		}
	}
	return nil
}
