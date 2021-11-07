import { Pipe, PipeTransform, Sanitizer } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl, SafeValue } from '@angular/platform-browser';

@Pipe({
  name: 'urlSanitizer'
})
export class UrlSanitizerPipe implements PipeTransform {

  constructor(private sanitizer:DomSanitizer){
  }
  
  transform(uri: string,url:string): SafeResourceUrl {

    return this.sanitizer.bypassSecurityTrustResourceUrl(url+uri);
  }

}
