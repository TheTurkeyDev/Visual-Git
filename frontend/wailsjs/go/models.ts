export namespace git {
	
	export class GitBranch {
	    name: string;
	    commitSHA1: string;
	    commitSubject: string;
	
	    static createFrom(source: any = {}) {
	        return new GitBranch(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.name = source["name"];
	        this.commitSHA1 = source["commitSHA1"];
	        this.commitSubject = source["commitSubject"];
	    }
	}
	export class GitStatusUntracked {
	    id: number;
	    path: string;
	
	    static createFrom(source: any = {}) {
	        return new GitStatusUntracked(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.id = source["id"];
	        this.path = source["path"];
	    }
	}
	export class GitStatusUnmerged {
	    id: number;
	    xy: string;
	    sub: string;
	    m1: string;
	    m2: string;
	    m3: string;
	    mW: string;
	    h1: string;
	    h2: string;
	    h3: string;
	    path: string;
	
	    static createFrom(source: any = {}) {
	        return new GitStatusUnmerged(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.id = source["id"];
	        this.xy = source["xy"];
	        this.sub = source["sub"];
	        this.m1 = source["m1"];
	        this.m2 = source["m2"];
	        this.m3 = source["m3"];
	        this.mW = source["mW"];
	        this.h1 = source["h1"];
	        this.h2 = source["h2"];
	        this.h3 = source["h3"];
	        this.path = source["path"];
	    }
	}
	export class GitStatusROC {
	    id: number;
	    xy: string;
	    sub: string;
	    mH: string;
	    mI: string;
	    mW: string;
	    hH: string;
	    hI: string;
	    x: number;
	    score: string;
	
	    static createFrom(source: any = {}) {
	        return new GitStatusROC(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.id = source["id"];
	        this.xy = source["xy"];
	        this.sub = source["sub"];
	        this.mH = source["mH"];
	        this.mI = source["mI"];
	        this.mW = source["mW"];
	        this.hH = source["hH"];
	        this.hI = source["hI"];
	        this.x = source["x"];
	        this.score = source["score"];
	    }
	}
	export class GitStatusOrdinary {
	    id: number;
	    xy: string;
	    sub: string;
	    mH: string;
	    mI: string;
	    mW: string;
	    hH: string;
	    hI: string;
	    path: string;
	
	    static createFrom(source: any = {}) {
	        return new GitStatusOrdinary(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.id = source["id"];
	        this.xy = source["xy"];
	        this.sub = source["sub"];
	        this.mH = source["mH"];
	        this.mI = source["mI"];
	        this.mW = source["mW"];
	        this.hH = source["hH"];
	        this.hI = source["hI"];
	        this.path = source["path"];
	    }
	}
	export class GitStatusChanges {
	    ordinary: GitStatusOrdinary[];
	    roc: GitStatusROC[];
	    unmerged: GitStatusUnmerged[];
	    untracked: GitStatusUntracked[];
	
	    static createFrom(source: any = {}) {
	        return new GitStatusChanges(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.ordinary = this.convertValues(source["ordinary"], GitStatusOrdinary);
	        this.roc = this.convertValues(source["roc"], GitStatusROC);
	        this.unmerged = this.convertValues(source["unmerged"], GitStatusUnmerged);
	        this.untracked = this.convertValues(source["untracked"], GitStatusUntracked);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class GitStatus {
	    changes: GitStatusChanges;
	    branch: string;
	
	    static createFrom(source: any = {}) {
	        return new GitStatus(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.changes = this.convertValues(source["changes"], GitStatusChanges);
	        this.branch = source["branch"];
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	
	
	
	
	
	export class LocalRepository {
	    location: string;
	    name: string;
	
	    static createFrom(source: any = {}) {
	        return new LocalRepository(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.location = source["location"];
	        this.name = source["name"];
	    }
	}

}

