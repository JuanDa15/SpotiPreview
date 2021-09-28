import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './pages/artist/artist.component';
import { NavComponent } from './shared/nav/nav.component';
import { SpotifyComponent } from './icons/spotify/spotify.component';
import { RouterModule } from '@angular/router';
import { HamburguerComponent } from './icons/hamburguer/hamburguer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistComponent,
    NavComponent,
    SpotifyComponent,
    HamburguerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
