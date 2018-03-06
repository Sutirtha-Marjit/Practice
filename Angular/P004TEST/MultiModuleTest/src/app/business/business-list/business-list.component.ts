import { Component, OnInit } from '@angular/core';
import { FormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-business-list',
  templateUrl: './business-list.component.html',
  styleUrls: ['./business-list.component.css']
})
export class BusinessListComponent implements OnInit {

  public crActibity:any=null;
  public activityList:Array<any>=[];

  constructor() { 
    this.crActibity = {
      activity:"",
      managerName:""
    }; 

    
  }

  resetActivity(){
    this.crActibity.activity=""; 
    this.crActibity.managerName="";
  }

  isActivityBlank(){
    return (this.crActibity.activity.trim().length>0 && this.crActibity.managerName.trim().length>0);
  }

  addActivity(){
    if(this.isActivityBlank()){
      let currentOBJ:any={};
      Object.assign(currentOBJ,this.crActibity);
      this.activityList.push(currentOBJ);

      this.resetActivity();
    }
  }

  ngOnInit() {

  }

}
