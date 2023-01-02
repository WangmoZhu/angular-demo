import { Component, VERSION } from '@angular/core';
import { GithubService } from './github.service';
import { repos } from './repo';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  throwError1() {
    //@ts-ignore
    var a = b;
  }

  throwError2() {
    try {
      //@ts-ignore
      var a = b;
    } catch (error) {
      // throw error; //rethrow the error
    }
  }

  userName: string = 'tektutorialshub';
  repos: repos[];

  loading: boolean = false;
  errorMessage;

  constructor(private githubService: GithubService) {}

  public getRepos() {
    this.loading = true;
    this.errorMessage = '';
    this.githubService.getReposCatchError(this.userName).subscribe(
      (response) => {
        //Next callback
        console.log('response received');
        this.repos = response;
      },
      (error) => {
        //Error callback
        console.error('error caught in component');
        this.errorMessage = error;
        this.loading = false;

        throw error;
      }
    );
  }
}
