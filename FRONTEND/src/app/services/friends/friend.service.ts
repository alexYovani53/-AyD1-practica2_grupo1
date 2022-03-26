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

  sendRequest(id1: number, id2: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
        'key': 'x-api-key',
        'value': 'NNctr6Tjrw9794gFXf3fi6zWBZ78j6Gv3UCb3y0x',
      })
    }

    return this.http.post(`${API_URL}/sendSolicitude`,
      JSON.stringify({
        logUser: id1,
        toUser: id2
      }),
      {headers: httpOptions.headers});
  }

  
  getVerSolicitud(idusuario: number): Observable<any>
  {
    return this.http.get(`${API_URL}/verSolicitudes/${idusuario}`);
  }

  updateAmistad(amistad: any): Observable<any>
  {
    return this.http.post(`${API_URL}/aceptarSolicitud/`,amistad);
  }


}
