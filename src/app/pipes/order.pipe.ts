import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'order'
})
export class OrderPipe implements PipeTransform {

  transform(value:any): any[] {

    return value.sort((user1:any,user2:any) => (user1['followers']['total'] < user2['followers']['total'])? 1 : -1);
  }

}
