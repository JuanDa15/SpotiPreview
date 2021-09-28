import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon, SweetAlertPosition } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor() { }

  fastNotification(icon:SweetAlertIcon,position:SweetAlertPosition){
    Swal.fire({
      icon:'success',
      position: 'center',
      showConfirmButton: false,
      timer: 1000,
      background: '#000'
    })
  }

  fastNotificationText(icon:SweetAlertIcon,position:SweetAlertPosition,text:string){
    Swal.fire({
      icon:'success',
      position: 'center',
      showConfirmButton: false,
      text: text,
      timer: 1000,
      background: '#000'
    })
  }
}
