import {Component, View} from 'angular2/core';

@Component({
  selector: 'udemy'
})

@View({
  templateUrl: 'udemy.html'
})

export class Udemy {

  constructor() {
    console.info('Udemy Component Mounted Successfully');
  }

}
