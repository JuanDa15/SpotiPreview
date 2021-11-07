import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Artist } from 'src/app/interfaces/artist.interface';
import { songInfo } from 'src/app/interfaces/songInfo.interface';
import { albumInfo } from 'src/app/interfaces/albumInfo.interface';
import { GetArtistAlbumsService } from 'src/app/services/get-artist-albums.service';
import { GetArtistService } from 'src/app/services/get-artist.service';
import { GetTopTracksService } from 'src/app/services/get-top-tracks.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {

  artistInfo!:Artist;
  tracks!:songInfo[];
  albums!:albumInfo[];

  constructor(private AR:ActivatedRoute,
              private artist:GetArtistService,
              private topTracks: GetTopTracksService,
              private router:Router,
              private Albums:GetArtistAlbumsService) { }

  ngOnInit(): void {
    this.tracks = [];
    this.AR.params.pipe(
      switchMap( ({id}) => {
        this.getTracks(id);
        this.getAlbums(id);
        return this.artist.getArtist(id);
        }
      )
    ).subscribe({
      next: val => this.artistInfo = val,
      error: err => console.log(err)
      }
    );
    
    
  }

  getTracks(id:string){
    this.topTracks.getTopTracks(id).subscribe({
      next: (val:songInfo[]) => this.tracks = val,
      error: err => console.log(err)
    })
  }

  getAlbums(id:string){
    this.Albums.getAlbums(id).subscribe({
      next: (val:songInfo[]) => this.albums = val,
      error: err => console.log(err)
    })
  }

  goToArtist( id:string){
    this.router.navigate(['artist', id]);
  }

  goToAlbum( id:string){
    this.router.navigate(['album', id]);
  }

}
