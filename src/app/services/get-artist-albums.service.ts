import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Albums, Item } from '../interfaces/albums.interface';
import { albumInfo } from '../interfaces/albumInfo.interface';
import { RequestUtilitesService } from './request-utilites.service';

@Injectable({
  providedIn: 'root'
})
export class GetArtistAlbumsService {

  constructor(private http:HttpClient,
              private utilities:RequestUtilitesService){}


  getAlbums(id:string){
    let endPoint:string = `/v1/artists/${id}/albums`;
    let url: string = `${environment.url}${endPoint}`;
    
    const params = new HttpParams()
                        .set('market','US');


    return this.http.get<Albums>(url,{
      headers: this.utilities.getHeaders(),
      params
    }).pipe(
      map( (value:Albums) => {

        let tempArr:albumInfo[] = [];
        let answer:Item[] = value.items;

        answer.map((album:Item) =>{
          let temp:albumInfo = {
            artists: album.artists,
            dimension: [album.images[0].width,album.images[0].height],
            name: album.name,
            releaseDate: album.release_date,
            uri: album.uri,
            url:album.images[0].url,
            id: album.id,
            external_url: album.external_urls.spotify,
            type: album.type
          }

          tempArr.push(temp);
        })

        return tempArr;
      })
    )

  }
}
