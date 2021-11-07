import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators'
import { answerToken } from '../interfaces/requestToken.interface';

@Injectable({
  providedIn: 'root'
})
export class GetTokenService {

  private _endPoint:string = 'https://accounts.spotify.com/api/token';

  constructor(private http:HttpClient) { }

  getToken(){ 
    const headers = new HttpHeaders()
          .set('Content-Type','application/x-www-form-urlencoded');

    const body = new URLSearchParams();
    
    body.set('grant_type','client_credentials');
    body.set('client_id','7d82d7e9b10d4380ad019c306195874b');
    body.set('client_secret','34ab793f50204415add17e9f0036aab7');


    return this.http.post<answerToken>(this._endPoint,body.toString(),{headers})
              .pipe(
                tap( ({access_token}) => {
                  if(access_token){
                    localStorage.setItem('token',access_token);
                  }
                }),
                map( value => {
                  (value)? true : false 
                })
              );    
  }
}
