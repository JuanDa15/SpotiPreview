import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Artist } from '../interfaces/artist.interface';
import { RequestUtilitesService } from './request-utilites.service';

@Injectable({
  providedIn: 'root'
})
export class GetArtistService {

  private _endPoint:string = '/v1/artists/';

  constructor(private http:HttpClient,
              private utilities:RequestUtilitesService) { }


  getArtist( id:string ){
    let URL:string = `${environment.url}${this._endPoint}${id}`;

    return this.http.get<Artist>(URL,{
      headers:this.utilities.getHeaders()
    });
  }

}
