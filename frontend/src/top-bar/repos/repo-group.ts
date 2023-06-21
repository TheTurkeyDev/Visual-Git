import { git } from '../../../wailsjs/go/models';

export type RepoGroup = {
    readonly name: string
    readonly contents: readonly (git.LocalRepository | RepoGroup)[]
}