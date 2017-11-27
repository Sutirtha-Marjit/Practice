import { Component } from '@angular/core';
import {MoistDirective} from './directives/moist.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Students world';

  onActivate(currentComponent){
    //console.log(event);
    console.log(currentComponent.constructor.name);

  }

}
