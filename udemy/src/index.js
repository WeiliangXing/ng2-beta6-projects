import {Component, View} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {Udemy} from 'udemy';

@Component({
  selector: 'main'
})

@View({
  directives: [Udemy],
  template: `
    <udemy></udemy>
  `
})

class Main {

}

bootstrap(Main);
