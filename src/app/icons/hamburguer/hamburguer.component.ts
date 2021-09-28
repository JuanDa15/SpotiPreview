import { Component, Input } from '@angular/core';

@Component({
  selector: 'hamburguer-icon',
  templateUrl: './hamburguer.component.html',
  styleUrls: ['./hamburguer.component.scss']
})
export class HamburguerComponent{

  customColor:string = "#000";

  @Input() set fillColor(color:string){
    this.customColor = color;
  }

  @Input() customWidth:number = 32;

  constructor() { }

}
