import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Releases } from '../interfaces/releases.interface';
import { GetTokenService } from './get-token.service';

@Injectable({
  providedIn: 'root'
})
export class ReleasesService {

  private _token = localStorage.getItem('token');
  private _endPoint = '/v1/browse/new-releases';

  constructor(private http:HttpClient,
              private tokenService:GetTokenService){
  }

  getNewReleases(){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this._token}`
    })

    return this.http.get<Releases>(`${environment.url}${this._endPoint}`,{headers});
  }
}
