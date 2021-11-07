import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './pages/artist/artist.component';
import { NavComponent } from './shared/nav/nav.component';
import { SpotifyComponent } from './icons/spotify/spotify.component';
import { RouterModule } from '@angular/router';
import { HamburguerComponent } from './icons/hamburguer/hamburguer.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { ImgURLPipe } from './pipes/img-url.pipe';
import { OrderPipe } from './pipes/order.pipe';
import { UrlSanitizerPipe } from './pipes/url-sanitizer.pipe';
import { SongWidgetComponent } from './components/song-widget/song-widget.component';
import { CardInfoComponent } from './components/song-info/song-info.component';
import { SongComponentComponent } from './components/song-component/song-component.component';
import { ErrorComponentComponent } from './components/error-component/error-component.component';
import { SeachbarComponentComponent } from './shared/seachbar-component/seachbar-component.component';
import { AlbumComponent } from './pages/album/album.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistComponent,
    NavComponent,
    SpotifyComponent,
    HamburguerComponent,
    SearchPageComponent,
    ImgURLPipe,
    OrderPipe,
    UrlSanitizerPipe,
    SongWidgetComponent,
    CardInfoComponent,
    SongComponentComponent,
    ErrorComponentComponent,
    SeachbarComponentComponent,
    AlbumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
