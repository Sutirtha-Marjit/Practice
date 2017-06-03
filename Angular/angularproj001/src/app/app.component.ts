import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'User registration';
  dateOptions:any = {
    months:["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    years:[],
    dates:[]
  }
  
  private datevalPopulation(){
    for(var i=1;i<=31;i++){
      this.dateOptions.dates.push(i);
    }

    for(var p=1800;p<3000;p++){
      this.dateOptions.years.push(p);
    }
  }

  constructor(){
    this.datevalPopulation();
  }
  
}
