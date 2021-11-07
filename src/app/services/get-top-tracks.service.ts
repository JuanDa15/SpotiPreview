import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { songInfo } from '../interfaces/songInfo.interface';
import { TopTracks, Track } from '../interfaces/toptracks.interface';
import { RequestUtilitesService } from './request-utilites.service';

@Injectable({
  providedIn: 'root'
})
export class GetTopTracksService {

  

  constructor(private http:HttpClient,
              private utilities:RequestUtilitesService) { }

  getTopTracks(id:string){  
    let endPoint:string = `/v1/artists/${id}/top-tracks`;
    let url: string = `${environment.url}${endPoint}`;
    
    const params = new HttpParams()
                        .set('market','ES');

    return this.http.get<TopTracks>(url,{
      headers:this.utilities.getHeaders(),
      params
    }).pipe(
      map( value => {
        let tempArr:songInfo[] = [];
        let answer:Track[] = value.tracks;

        answer.forEach( (track:Track) => {
          let temp:songInfo = {
            artists: track.artists,
            url:track.album.images[0].url,
            dimension:[track.album.images[0].height, track.album.images[0].width],
            name: track.name,
            releaseDate:track.album.release_date,
            uri: track.uri
          }

          tempArr.push(temp);
        })

        return tempArr;
      })
    );
  }
}
