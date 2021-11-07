import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Artist } from '../interfaces/releases.interface';
import { RequestUtilitesService } from './request-utilites.service';

@Injectable({
  providedIn: 'root'
})
export class GetArtistListService {

  private _endPoint:string = `/v1/search`;

  constructor(private http:HttpClient,
              private utilities:RequestUtilitesService) { }

  getArtist(value:string){
    let url:string = `${environment.url}${this._endPoint}`;
  
    const params = new HttpParams()
        .set('query',value)
        .set('type','artist')
        .set('limit','15');
  
    return this.http.get<Artist[]>(url,{
      headers:this.utilities.getHeaders(),
      params
    }).pipe(
        map( (value:any) => value.artists.items )
      );
  }
}
