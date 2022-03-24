import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from "rxjs";
import {API_URL} from "../URL";

@Injectable({
  providedIn: "root"
})
export class FriendService {
  constructor(private http: HttpClient) {}

  notFriends(user: any): Observable<any> {
    return this.http.get(`${API_URL}/notFriends/${user}`);
  }
}
