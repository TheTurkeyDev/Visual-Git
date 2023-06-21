package git

type GitBranch struct {
	Name          string `json:"name"`
	CommitSHA1    string `json:"commitSHA1"`
	CommitSubject string `json:"commitSubject"`
}
