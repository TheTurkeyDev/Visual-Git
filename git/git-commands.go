package git

import (
	"bytes"
	"fmt"
	"log"
	"os"
	"os/exec"
	"path"
	"strings"
)

type GitCommands struct{}

func InitGitCommands() *GitCommands {
	return &GitCommands{}
}

func (gc *GitCommands) GitInit(path string) string {
	output, _ := runCMD(path, "git", "init")
	return output
}

func (gc *GitCommands) GitStatus(repo LocalRepository) GitStatus {
	output, _ := runCMD(repo.Location, "git", "status", "-u", "--porcelain=2", "--branch")
	lines := strings.Split(output, "\n")

	status := GitStatus{
		Changes: GitStatusChanges{
			Ordinary:  []GitStatusOrdinary{},
			ROC:       []GitStatusROC{},
			Unmerged:  []GitStatusUnmerged{},
			Untracked: []GitStatusUntracked{},
		},
		Branch: "",
	}

	for _, line := range lines {
		parts := strings.Split(line, " ")

		if len(line) == 0 {
			continue
		}

		switch line[0] {
		case '#':
			if strings.HasPrefix(line, "# branch.head") {
				status.Branch = line[14:]
			}
			// Header line
		case '1':
			// Ordinary change `1 <XY> <sub> <mH> <mI> <mW> <hH> <hI> <path>`
			gso := GitStatusOrdinary{
				Id:   '1',
				Xy:   parts[1],
				Sub:  parts[2],
				MH:   parts[3],
				MI:   parts[4],
				MW:   parts[5],
				HH:   parts[6],
				HI:   parts[7],
				Path: strings.Join(parts[8:], " "),
			}
			status.Changes.Ordinary = append(status.Changes.Ordinary, gso)
		case '2':
			// Renamed or copied `2 <XY> <sub> <mH> <mI> <mW> <hH> <hI> <X><score> <path><sep><origPath>`
			gsroc := GitStatusROC{
				Id:    '2',
				Xy:    parts[1],
				Sub:   parts[2],
				MH:    parts[3],
				MI:    parts[4],
				MW:    parts[5],
				HH:    parts[6],
				HI:    parts[7],
				X:     parts[8][0],
				Score: parts[8][1:],
			}
			status.Changes.ROC = append(status.Changes.ROC, gsroc)
		case 'u':
			// unmerged `u <XY> <sub> <m1> <m2> <m3> <mW> <h1> <h2> <h3> <path>`
			gsu := GitStatusUnmerged{
				Id:   'u',
				Xy:   parts[1],
				Sub:  parts[2],
				M1:   parts[3],
				M2:   parts[4],
				M3:   parts[5],
				MW:   parts[6],
				H1:   parts[7],
				H2:   parts[8],
				H3:   parts[9],
				Path: strings.Join(parts[10:], " "),
			}
			status.Changes.Unmerged = append(status.Changes.Unmerged, gsu)
		case '?':
			// untracked `? <path>`
			gsu := GitStatusUntracked{
				Id:   '?',
				Path: strings.Join(parts[1:], " "),
			}
			status.Changes.Untracked = append(status.Changes.Untracked, gsu)
		}
	}
	return status
}

func (gc *GitCommands) GitBranchesList(repo LocalRepository) []GitBranch {
	branches := []GitBranch{}
	output, _ := runCMD(repo.Location, "git", "branch", "-a", "-v", "--no-color")
	lines := strings.Split(output, "\n")
	for _, line := range lines {
		if len(line) == 0 {
			continue
		}
		parts := strings.Fields(line)
		index := 0
		if parts[0] == "*" {
			index = 1
		}
		branch := GitBranch{
			// 0 index is a * indicating current branch
			Name:          parts[index],
			CommitSHA1:    parts[index+1],
			CommitSubject: strings.Join(parts[index+2:], " "),
		}
		branches = append(branches, branch)
	}

	if len(branches) == 0 {
		branches = append(branches, GitBranch{
			Name:          "main",
			CommitSHA1:    "",
			CommitSubject: "",
		})
	}
	return branches
}

func (gc *GitCommands) GitBranch(repo LocalRepository, name string) string {
	output, _ := runCMD(repo.Location, "git", "branch", name)
	return output
}

func (gc *GitCommands) GitDiff(repo LocalRepository, filePath string) string {
	output, _ := runCMD(repo.Location, "git", "diff", filePath)
	return output
}

func (gc *GitCommands) GitAdd(repo LocalRepository, filePath string) string {
	output, _ := runCMD(repo.Location, "git", "add", filePath)
	return output
}

func (gc *GitCommands) GitReset(repo LocalRepository, filePath string) string {
	output, _ := runCMD(repo.Location, "git", "reset", filePath)
	return output
}

func (gc *GitCommands) GitCommit(repo LocalRepository, message string) string {
	output, _ := runCMD(repo.Location, "git", "commit", "-m", message)
	return output
}

func (gc *GitCommands) GitPush(repo LocalRepository) string {
	output, _ := runCMD(repo.Location, "git", "push")
	return output
}

func (gc *GitCommands) GitIgnore(repo LocalRepository, pattern string) {
	log.Println(repo.Location)
	log.Println(path.Join(repo.Location, ".gitignore"))
	f, err := os.OpenFile(path.Join(repo.Location, ".gitignore"), os.O_APPEND|os.O_CREATE|os.O_WRONLY, 0o644)
	if err != nil {
		log.Println(err)
	}
	defer f.Close()
	if _, err := f.WriteString("\n" + pattern); err != nil {
		log.Println(err)
	}
}

func runCMD(location string, command string, args ...string) (string, string) {
	cmd := exec.Command(command, args...)
	var outb, errb bytes.Buffer
	cmd.Dir = location
	cmd.Stdout = &outb
	cmd.Stderr = &errb
	err := cmd.Run()
	if err != nil {
		fmt.Println("ERROR!: ", err)
	}
	return outb.String(), errb.String()
}
