export class GitHubUser {

    public login: Date;
    public id: string;
    public node_id: number;
    public avatar_url: string;
    public gravatar_id: number;
    public url: number;
    public html_url: number;
    public followers_url: number;
    public following_url: number;
    public gists_url: number;
    public starred_url: number;
    public subscriptions_url: number;
    public organizations_url: number;
    public repos_url: number;
    public events_url: number;
    public received_events_url: number;
    public type: number;
    public site_admin: number;
    public name: number;
    public company: number;
    public blog: number;
    public location: number;
    public email: number;
    public hireable: number;
    public bio: number;
    public twitter_username: number;
    public public_repos: number;
    public public_gists: number;
    public followers: number;
    public following: number;
    public created_at: number;
    public updated_at: number;

    constructor(props: GitHubUser) {
        Object.assign(this, props);
    }

}
