import { Component, OnInit } from '@angular/core';
import {MoistDirective} from '../../directives/moist.directive';
import {Student} from '../../shared/Student';

@Component({
  selector: 'app-registrationform',
  templateUrl: './registrationform.component.html',
  styleUrls: ['./registrationform.component.css']
})
export class RegistrationformComponent implements OnInit {
  
  private fromHeading:string = "Registration From";
  private student:Student = new Student();

  constructor() {
    
   }
  
  ngOnInit() {
     
  }

  onSubmit($event){
    
  }


}
