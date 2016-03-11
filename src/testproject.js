import {Component, View} from 'angular2/core';

@Component({
  selector: 'testproject'
})

@View({
  templateUrl: 'testproject.html'
})

export class Testproject {

  constructor() {
    console.info('Testproject Component Mounted Successfully');
  }

}
