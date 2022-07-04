import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  template: `
<mat-spinner class="mid"></mat-spinner>
  `,
  styles: [`
  .mid {
    position: relative;
    left: 50%;
    transform: translate(-50%);
  }`
  ]
})
export class LoaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
