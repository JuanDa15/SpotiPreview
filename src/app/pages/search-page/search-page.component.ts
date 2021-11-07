import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Artist } from 'src/app/interfaces/releases.interface';
import { GetArtistListService } from 'src/app/services/get-artist-list.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit{

  Artists: any = [];


  @ViewChild('searchbar') searchbar!:ElementRef<HTMLInputElement>;

  constructor(private artists:GetArtistListService,
              private router: Router) { }



  ngOnInit(): void {
  
  }

  search(value:string){

    if(value.trim().length === 0){
      this.Artists = [];
    }else{
      this.artists.getArtist(value).subscribe({
        next: (value:any) => {
          this.Artists = value;
        },
        error: err => console.log(err)
      })
    }
  }

  goToArtist( id:string){
    this.router.navigate(['artist', id]);
  }
}
