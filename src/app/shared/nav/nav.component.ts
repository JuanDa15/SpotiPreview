import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent{

  @ViewChild('toggle') toggle!:ElementRef<HTMLElement>;

  @ViewChild('menu') menu!:ElementRef<HTMLElement>;

  logoColor:string = "#fff";
  toggleColor:string = "#fff";

  constructor() { }

  toggleAside():void{
    this.menu.nativeElement.classList.toggle('active');
  }
}
