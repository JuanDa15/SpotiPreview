import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'spotify-icon',
  templateUrl: './spotify.component.html',
  styleUrls: ['./spotify.component.scss']
})
export class SpotifyComponent{

  customColor:string = "#fff";

  @Input() set fillColor(color:string){
    this.customColor = color;
  }

  @Input() customWidth!:number;


  constructor() { }
  

}
