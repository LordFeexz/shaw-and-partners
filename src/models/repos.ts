import User from "./user";

export default class Repos {
  public id!: number;
  public node_id!: string;
  public name!: string;
  public full_name!: string;
  public private!: boolean;
  public owner!: User;
  public html_url!: string;
  public description!: string;
  public fork!: boolean;
  public url!: string;
  public forks_url!: string;
  public keys_url!: string;
  public collaborators_url!: string;
  public teams_url!: string;
  public hooks_url!: string;
  public issue_events_url!: string;
  public events_url!: string;
  public assignees_url!: string;
  public branches_url!: string;
  public tags_url!: string;
  public blobs_url!: string;
  public git_tags_url!: string;
  public git_refs_url!: string;
  public trees_url!: string;
  public statuses_url!: string;
  public languages_url!: string;
  public stargazers_url!: string;
  public contributors_url!: string;
  public subscribers_url!: string;
  public subscription_url!: string;
  public commits_url!: string;
  public git_commits_url!: string;
  public comments_url!: string;
  public issue_comment_url!: string;
  public contents_url!: string;
  public compare_url!: string;
  public merges_url!: string;
  public archive_url!: string;
  public homepage!: string;
  public svn_url!: string;
  public has_discussions!: boolean;
  public has_pages!: boolean;
  public has_wiki!: boolean;
  public has_downloads!: boolean;
  public has_projects!: boolean;
  public has_issues!: boolean;
  public language!: string;
  public watchers_count!: number;
  public stargazers_count!: number;
  public size!: number;
  public clone_url!: string;
  public ssh_url!: string;
  public git_url!: string;
  public pushed_at!: string;
  public updated_at!: string;
  public created_at!: string;
  public deployments_url!: string;
  public releases_url!: string;
  public labels_url!: string;
  public notifications_url!: string;
  public milestones_url!: string;
  public pulls_url!: string;
  public issues_url!: string;
  public downloads_url!: string;
  public forks_count!: number;
  public mirror_url!: string;
  public archived!: boolean;
  public disabled!: boolean;
  public open_issues_count!: number;
  public license!: boolean;
  public allow_forking!: boolean;
  public is_template!: boolean;
  public web_commit_signoff_required!: boolean;
  public topics!: any;
  public visibility!: string;
  public forks!: number;
  public open_issues!: number;
  public watchers!: number;
  public default_branch!: string;
}
