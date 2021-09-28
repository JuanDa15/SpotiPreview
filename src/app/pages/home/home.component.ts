import { Component, OnInit } from '@angular/core';
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

  releases: Item[] = [];

  constructor(private token:GetTokenService,
              private notification:NotificationsService,
              private lastReleases:ReleasesService) { }

  ngOnInit(): void {
    this.validateToken();
    this.getLastReleases();
  }

  validateToken(){
    if(!localStorage.getItem('token')){
      this.token.getToken().subscribe({
        next: () => {
          this.notification.fastNotification('success','center');
        },
        error: () =>{
          localStorage.clear();
          this.notification.fastNotification('error','center');
        }
      })
    }
  }

  getLastReleases(){
    this.lastReleases.getNewReleases()
      .subscribe({
        next: ({albums}) => this.releases = albums.items,
        error: () => this.notification.fastNotificationText('error','center','Error while getting last releases')
      })
  }
}