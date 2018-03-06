import { Component, OnInit, Output, EventEmitter, DoCheck, OnChanges } from '@angular/core';

@Component({
  selector: 'app-business-fund-management',
  templateUrl: './business-fund-management.component.html',
  styleUrls: ['./business-fund-management.component.css']
})
export class BusinessFundManagementComponent implements OnInit,OnChanges {

  public businessFundCollection = [];
  public sim = 0;
  public normalList = false;
  @Output() fundSelectionEvent = new EventEmitter<any>(); 
  

  constructor() { 
    this.businessFundCollection = [
      "CitiBank","UBI","SBI","Dauche Bank"
    ];
  }

  clickOnFundButton(data:string){
    this.fundSelectionEvent.emit({fund:data});
  }

  ngOnInit() {
    console.log('ngOnInit:'+new Date());
    setInterval(()=>{
      this.sim++;
    },2200);
  }

  ngOnChanges(){
    console.log('ngOnChanges:'+new Date());
  }

  ngDoCheck(){
    console.log('do check');
  }

}
