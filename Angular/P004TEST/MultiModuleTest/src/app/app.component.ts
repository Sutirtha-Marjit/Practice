import { Component } from '@angular/core';
import {GlobalPropertyManagerService} from './services/global-property-manager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  requestServed:number = 0;

  constructor(private globalPropertyManager:GlobalPropertyManagerService){
    this.requestServed = globalPropertyManager.alertCount;
    

  }

  updateReqNo(){
    this.globalPropertyManager.updateCount();
    this.requestServed = this.globalPropertyManager.alertCount;
  }

}
