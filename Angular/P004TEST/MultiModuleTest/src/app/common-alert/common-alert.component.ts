import { Component, OnInit } from '@angular/core';
import {GlobalPropertyManagerService} from '../services/global-property-manager.service';

@Component({
  selector: 'app-common-alert',
  templateUrl: './common-alert.component.html',
  styleUrls: ['./common-alert.component.css']
})
export class CommonAlertComponent implements OnInit {

  public reqTotal:number = 0;
  constructor(private globalPropertyManager:GlobalPropertyManagerService) {
    
   }

  ngOnInit() {
    this.reqTotal = this.globalPropertyManager.alertCount;
  }

    updateReqNo(){
    this.globalPropertyManager.updateCount();
    this.reqTotal = this.globalPropertyManager.alertCount;
  }

}
