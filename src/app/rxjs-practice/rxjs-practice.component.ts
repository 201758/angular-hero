import { Component, OnInit } from '@angular/core';
import { tap, map } from 'rxjs/operators';
import {of} from 'rxjs';
@Component({
  selector: 'app-rxjs-practice',
  templateUrl: './rxjs-practice.component.html',
  styleUrls: ['./rxjs-practice.component.css']
})
export class RxjsPracticeComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
    of(Math.random()).pipe(
      tap(console.log),
      map(n => n > 0.5 ? 'big' : 'small')
    ).subscribe(console.log);
  }

}
