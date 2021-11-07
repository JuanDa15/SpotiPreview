import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Album } from '../interfaces/album.interface';
import { albumInfo } from '../interfaces/albumInfo.interface';
import { GetTokenService } from './get-token.service';

interface params{
  key:string;
  value:string;
}

@Injectable({
  providedIn: 'root'
})
export class RequestUtilitesService {

  constructor(private tokenSpotify:GetTokenService) {
    this.tokenSpotify.getToken();
  }

  getToken(){
    return (localStorage.getItem('token'))? localStorage.getItem('token') : '';
  }

  getHeaders(){
    let token:string | null = this.getToken();

    return new HttpHeaders().set('Authorization',`Bearer ${token}`);
  }
}
