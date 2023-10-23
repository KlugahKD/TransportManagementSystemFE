import { Injectable } from '@angular/core';
import { UsersRequest } from '../Models/users-request.models';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  addAdmin(model: UsersRequest ): Observable<void> {
    return this.http.post<void>('https://localhost:7187/api/admins', model);
  }
}
