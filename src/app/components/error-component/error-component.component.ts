import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'error-component',
  template: `
    <div class="error">
      <p>{{errorMessage}}</p>
      <p>Refresh the page again <i class="fas fa-redo-alt"></i></p>
    </div>`,
  styles: [`
    @import 'src/styles.scss';
    
    .error{
      width: 95%;
      margin: 1rem auto;
      border-radius: .5rem;
      border: 3px solid rgb(114, 40, 40);
      background-color: rgb(153, 79, 79);
      color: rgb(114, 40, 40);
      display: grid;
      place-items: center;
      padding: .5rem 1rem;

      p{
        margin: 0;

        &:nth-child(1){
          font-size: 2.5rem;
        }
      
        &:nth-child(2){
          font-size: 2rem;
        }
      }
    }
  `]
})
export class ErrorComponentComponent implements OnInit {


  @Input() errorMessage!:string;

  constructor() { }

  ngOnInit(): void {
  }

}
