import { Component, Input, OnInit } from '@angular/core';
import { songInfo } from 'src/app/interfaces/songInfo.interface';

@Component({
  selector: 'song-component',
  template: `
    <div class="track">
      <img  [src]="track.url | imgURL"
            [alt]="track.name"
            [width]="361" 
            [height]="381">

      <card-info [songInfo]="track">
      </card-info>
    </div>
  `,
  styles: [`
    .track{
      border-radius: .5rem;
      filter: drop-shadow(0 0 1px rgb(200, 200, 200));
      overflow: hidden;
      position: relative !important;
      cursor: pointer;
      margin-bottom: 1rem;

      
      img{
        width: 100%;
        height: 100%;
        filter: blur(2px) brightness(.5);
        transition: filter .3s ease-in;


        &:hover{
          filter: blur(0);
        }
      }



      &:hover img{
        filter: blur(0);
      }
      
      &:hover card-info{
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.774);
      }
    }

    card-info{
      position: absolute !important;
      width: 100%;
      padding: 1rem;
      left: 0;
      bottom: -100%;
      transition: all .5s ease;
      border-radius: .5rem;
    }
  `]
})
export class SongComponentComponent implements OnInit {


  @Input() track!:songInfo;

  constructor() { }

  ngOnInit(): void {
  }

}
