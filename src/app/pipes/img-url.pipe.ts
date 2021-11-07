import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imgURL'
})
export class ImgURLPipe implements PipeTransform {

  transform(value: string): string {

    let URL:string = value;
    if(URL){
      return URL;
    }else{
      URL = "../assets/img/default-profile.jpg";
      return URL;
    }

  }

}
