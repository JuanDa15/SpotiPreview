import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Album } from '../interfaces/album.interface';
import { albumInfo } from '../interfaces/albumInfo.interface';
import { RequestUtilitesService } from './request-utilites.service';

@Injectable({
  providedIn: 'root'
})
export class GetAlbumService {

  private _endPoint:string = '/v1/albums/';
  
  constructor(private http:HttpClient,
              private utilities:RequestUtilitesService) { }

  getAlbum(id:string){
    let url: string = `${environment.url}${this._endPoint}${id}`;
  
    const params = new HttpParams()
                        .set('market','US');

    return this.http.get<Album>(url,{
      headers:this.utilities.getHeaders(),
      params
    }).pipe(
      map( (album:Album) => {

        let temp:albumInfo = {
          artists: album.artists,
          dimension: [album.images[0].width,album.images[0].height],
          name: album.name,
          releaseDate: album.release_date,
          uri: album.uri,
          url:album.images[0].url,
          id: album.id,
          type: album.type,
          external_url: album.external_urls.spotify,
          popularity: album.popularity
        };
    

        return temp;
      })
    )
  }
}
