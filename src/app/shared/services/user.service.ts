import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { User } from '../types/user.type';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  //private property to store all URLs
  private readonly _apiURL: any = {};
  //private property to store default user
  private readonly _defaultUser: User;

  constructor(private _http: HttpClient) {
    this._defaultUser = {
      firstname: 'firstname',
      lastname: 'lastname',
      email: 'email@email.com',
    };

    //build base url
    let baseUrl = `${environment.api.protocol}://${environment.api.host}`;

    // build all urls
    Object.keys(environment.api.endpoints).forEach(
      (k) =>
        // @ts-ignore
        (this._apiURL[k] = `${baseUrl}${environment.api.endpoints[k]}`)
    );
  }

  /**
   * Return private property _defaultUser
   */
  get defaultUser(): User {
    return this._defaultUser;
  }

  /**
   * Maps a randomUser to a User
   * @param randomUser
   * @returns User
   */
  private mapRandomUserToUser(randomUser: any): User {
    if (randomUser && randomUser.name) {
      return {
        firstname: randomUser.name.first,
        lastname: randomUser.name.last,
        email: randomUser.email,
      };
    } else {
      console.error('Error mapRandomUserToUser');
      return this._defaultUser;
    }
  }

  /**
   * Fetches a user from the API and maps the response to a User
   * @returns Observable of a User
   */
  fetchUser(): Observable<User> {
    return this._http.get<any>(this._apiURL.user).pipe(
      map((response) => {
        return this.mapRandomUserToUser(response.results[0]);
      }),
      catchError((error) => {
        console.error('Error fetchUser', error);
        throw error;
      })
    );
  }
}
