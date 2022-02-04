import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserPage } from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  /**
   * 
   * @returns Page of of user
   */
  public loadUsers(page:number = 0): Observable<UserPage>{
    return this.http.get<UserPage>(environment.backendUrl + 'users', {params: {page}});
  }
}
