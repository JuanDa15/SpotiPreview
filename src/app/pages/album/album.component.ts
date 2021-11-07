import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { albumInfo } from 'src/app/interfaces/albumInfo.interface';
import { GetAlbumService } from 'src/app/services/get-album.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  albumInfo!:albumInfo;
  id!:string;

  constructor(private album:GetAlbumService,
              private AR:ActivatedRoute) { }

  ngOnInit(): void {
    this.AR.params.pipe(
      switchMap( ({id}) => {
        this.id = id;
        return this.album.getAlbum(id);
      })
    ).subscribe({
      next: (val:albumInfo) => {
        this.albumInfo = val;
        console.log(val);
      },
      error: err => console.log(err)
    })
  }

}
