import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { songInfo } from 'src/app/interfaces/songInfo.interface';
import { Albums, Item } from 'src/app/interfaces/releases.interface';
import { GetTokenService } from 'src/app/services/get-token.service';
import { NotificationsService } from 'src/app/services/notifications.service';
import { ReleasesService } from 'src/app/services/releases.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  releases: songInfo[] = [];
  error:boolean = false;
  errorMessage:string = ''

  constructor(private token:GetTokenService,
              private notification:NotificationsService,
              private lastReleases:ReleasesService,
              private router:Router) { }

  ngOnInit(): void {
    this.validateToken();
  }

  validateToken(){
    if(!localStorage.getItem('token')){
      this.token.getToken().subscribe({
        next: () => {
          this.notification.fastNotification('success','center');
          this.getLastReleases();
          this.error = false;
        },
        error: () =>{
          this.error = true;
          localStorage.clear();
          this.notification.fastNotification('error','center');
        }
      })
    }else{
      this.getLastReleases();
    }
  }

  getLastReleases(){
    this.lastReleases.getNewReleases()
      .subscribe({
        next: (releases:songInfo[]) => {
          this.error = false;
          this.releases = releases;
        },
        error: (err) =>{
          console.log(err);
          this.error = true;
          this.errorMessage = err.error.error.message;
          localStorage.clear(); 
          this.notification.fastNotificationText('error','center','Error while getting last releases')
        }
      })
  }

  goToArtist( id:string){
    this.router.navigate(['artist', id]);
  }

  /*
  artists.name
  images.url
  images.dimension = [images.width, images.height]
  name
  release_date
  total tracks
  type
  */
}