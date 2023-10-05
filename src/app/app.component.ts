import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  price = 9999;
  bbb = 10;

  add100() {
    let number = 0;
    number = this.price + 100;
    this.price = number;
  }

  mina100() {
    let number = 0;
    number = this.price - 100;
    this.price = number;
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
