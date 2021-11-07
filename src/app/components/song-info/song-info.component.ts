import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { songInfo } from 'src/app/interfaces/songInfo.interface';

@Component({
  selector: 'card-info',
  template: `
    <div class="release__info">
      <song-widget [uri]="songInfo.uri"></song-widget>
      <label>Artist:</label>
      <p class="artist" *ngFor="let artist of songInfo.artists" 
        (click)="goToArtist( artist.id )">
        {{artist.name}}
      </p>
      <label>Song name:</label>
      <p>{{songInfo.name}}</p>

      <p class="release__date">
        <span>Release date:</span>
        <br>
        {{songInfo.releaseDate | date}}
      </p>
    </div>
  `,
  styles: [`
    @import 'src/styles.scss';

    .release__info{
      transition: all .5s ease;
      display: flex;
      flex-flow: column nowrap;
      cursor: default;
      width:100%;

      label,p{
        margin: 0;
        padding: 0;
      }

      label{
        font-weight: 800;
        font-size: .9rem;
        color: $dark_green;
      }

      p{
        font-size: .9rem;
        margin-bottom: .5rem;
      }
    }

    .release__date{
      text-align: right;
      font-size: .8rem;

      span{
        font-weight: 700;
      }
    }

    .artist{
      cursor: pointer;

      &:hover{
        color: $dark_green;
      }
    }
  `]
})
export class CardInfoComponent implements OnInit {

  @Input() songInfo!:songInfo;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goToArtist( id:string){
    this.router.navigate(['artist', id]);
  }

}
