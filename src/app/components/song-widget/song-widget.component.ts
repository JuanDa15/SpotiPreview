import { Component, Input } from '@angular/core';

@Component({
  selector: 'song-widget',
  template: `
    <iframe [src]=" uri |urlSanitizer:'https://open.spotify.com/embed?uri='" 
            width="auto" 
            height="{{height}}" 
            frameborder="0" 
            allowtransparency="true" 
            allow="encrypted-media"
            style="border-radius: .5rem;">
    </iframe>
  `,
  styles: [`
    iframe{
      width: 100%;
    }
  `]
})
export class SongWidgetComponent{
  @Input() uri!:string;
  @Input() height:string = '80';
}
