package git

type GitStatus struct {
	Changes GitStatusChanges `json:"changes"`
	Branch  string           `json:"branch"`
}

type GitStatusChanges struct {
	Ordinary  []GitStatusOrdinary  `json:"ordinary"`
	ROC       []GitStatusROC       `json:"roc"`
	Unmerged  []GitStatusUnmerged  `json:"unmerged"`
	Untracked []GitStatusUntracked `json:"untracked"`
}
type GitStatusOrdinary struct {
	Id   byte   `json:"id"`
	Xy   string `json:"xy"`
	Sub  string `json:"sub"`
	MH   string `json:"mH"`
	MI   string `json:"mI"`
	MW   string `json:"mW"`
	HH   string `json:"hH"`
	HI   string `json:"hI"`
	Path string `json:"path"`
}

type GitStatusROC struct {
	Id    byte   `json:"id"`
	Xy    string `json:"xy"`
	Sub   string `json:"sub"`
	MH    string `json:"mH"`
	MI    string `json:"mI"`
	MW    string `json:"mW"`
	HH    string `json:"hH"`
	HI    string `json:"hI"`
	X     byte   `json:"x"`
	Score string `json:"score"`
}

type GitStatusUnmerged struct {
	Id   byte   `json:"id"`
	Xy   string `json:"xy"`
	Sub  string `json:"sub"`
	M1   string `json:"m1"`
	M2   string `json:"m2"`
	M3   string `json:"m3"`
	MW   string `json:"mW"`
	H1   string `json:"h1"`
	H2   string `json:"h2"`
	H3   string `json:"h3"`
	Path string `json:"path"`
}

type GitStatusUntracked struct {
	Id   byte   `json:"id"`
	Path string `json:"path"`
}
