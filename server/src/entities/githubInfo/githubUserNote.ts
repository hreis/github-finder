export class GitHubUserNote {

    public note: string;
    public userId: string;

    constructor(props: GitHubUserNote) {
        Object.assign(this, props);
    }

}
