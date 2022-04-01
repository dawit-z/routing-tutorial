import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  baseUrl: string = "http://localhost:27091/api/users";

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl)
  }

  getUser(id: number): Observable<any> {
    return this.http.get<any>(this.baseUrl + '/${id}')
  }
}
