import {Component, View} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {Testproject} from 'testproject';

@Component({
  selector: 'main'
})

@View({
  directives: [Testproject],
  template: `
    <testproject></testproject>
  `
})

class Main {

}

bootstrap(Main);
