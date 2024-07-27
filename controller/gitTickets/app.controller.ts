import * as dotenv from "dotenv";
import { Octokit } from "octokit";

dotenv.config();

class GitHubClient {
  private octokit: Octokit;
  private owner: string;
  private repo: string;

  constructor() {
    this.octokit = new Octokit({
      auth: process.env.GITHUB_TOKEN,
    });
    this.owner = process.env.GIT_USERNAME as string;
    this.repo = process.env.GIT_REPO as string;
  }

  async createIssue(title: string, body: string) {
    const { data } = await this.octokit.issues.create({
      owner: this.owner,
      repo: this.repo,
      title,
      body,
    });
    return data;
  }

  async updateIssue(issueNumber: number, title?: string, body?: string, state?: 'open' | 'closed') {
    const { data } = await this.octokit.issues.update({
      owner: this.owner,
      repo: this.repo,
      issue_number: issueNumber,
      title,
      body,
      state,
    });
    return data;
  }

  async deleteIssueComment(commentId: number) {
    await this.octokit.issues.deleteComment({
      owner: this.owner,
      repo: this.repo,
      comment_id: commentId,
    });
  }
}

export default GitHubClient;
