import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { repos } from './repo';

@Injectable({ providedIn: 'root' })
export class GithubService {
  baseURL: string = 'https://api.github.com/';
  constructor(private http: HttpClient) {}

  getRepos(userName: string): Observable<any> {
    return this.http.get(this.baseURL + 'userY/' + userName + '/repos');
  }

  getReposCatchError(userName: string): Observable<repos[]> {
    return this.http
      .get<repos[]>(this.baseURL + 'usersY/' + userName + 'repos')
      .pipe(
        catchError((err) => {
          console.log('error caught in service');
          console.error(err);
          return throwError(err);
        })
      );
  }
}
