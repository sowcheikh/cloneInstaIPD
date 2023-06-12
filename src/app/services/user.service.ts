import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserResponse} from "../models/User";
import {API_URL} from "../../config";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl: string = API_URL + 'user/';
  constructor(private http: HttpClient) { }


  // Get user profile
  getUserProfile(userId: string): Observable<UserResponse[]> {
    return this.http.get<UserResponse[]>(`${this.apiUrl}${userId}`);
  }
}
