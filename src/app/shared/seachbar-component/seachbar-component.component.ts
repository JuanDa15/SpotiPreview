import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'seachbar',
  template: `
    <h1>{{ label }} </h1>
    <input  type="text" 
            class="searchbar"
            (keyup)="keyPressed()"
            (keyup.enter)="search()"
            #searchbar>
  `,
  styles: [`
    @import 'src/styles.scss';

    .searchbar{
      border: 1px solid $white;
      border-radius: .4rem;
      width: 100%;
      background-color: $almost_black;
      padding: .4rem .8rem;
      color: $dark_green;
      font-size: 1.2rem;
      outline: none;
      margin-bottom: 1rem;

      &:focus{
        border-color: $light_green;
      }
    }

    h1{
      margin-bottom: 1rem;
      font-weight: 600;
    }
  `]
})
export class SeachbarComponentComponent implements OnInit, AfterViewInit {

  term:string = '';

  @Input() label:string = '';
  @ViewChild('searchbar') searchbar!:ElementRef<HTMLInputElement>;

  @Output() OnEnter   :EventEmitter<string> = new EventEmitter();
  @Output() OnDebounce:EventEmitter<string> = new EventEmitter();

  debouncer:Subject<string> = new Subject();

  ngOnInit(): void {
    this.debouncer
      .pipe(debounceTime(300))
        .subscribe(term =>this.OnDebounce.emit(term));
  }

  ngAfterViewInit(): void {
    this.searchbar.nativeElement.focus();
  }

  search(){
    this.term = this.searchbar.nativeElement.value;
    this.OnEnter.emit(this.term);
  }

  
  keyPressed(){
    this.term = this.searchbar.nativeElement.value;
    this.debouncer.next(this.term);
  }

}
