import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { songInfo } from '../interfaces/songInfo.interface';
import { Item, Releases } from '../interfaces/releases.interface';
import { GetTokenService } from './get-token.service';
import { RequestUtilitesService } from './request-utilites.service';

@Injectable({
  providedIn: 'root'
})
export class ReleasesService {

  private _endPoint = '/v1/browse/new-releases';

  constructor(private http:HttpClient,
              private utilities:RequestUtilitesService){
  }

  getNewReleases(){
    let url:string = `${environment.url}${this._endPoint}`;

    return this.http.get<Releases>(url,{
      headers:this.utilities.getHeaders()
    }).pipe(
      map( (resp:Releases) => {
        let releases:Item[] = resp.albums.items;
        let mappedAnswer:songInfo[] = releases.map( release => {
          return {
            artists: release.artists,
            url: release.images[0].url,
            dimension: [release.images[0].width,release.images[0].height],
            name: release.name,
            releaseDate: release.release_date,
            uri: release.uri
          }
        }) 

        return mappedAnswer;
      })
    )
  }

}



