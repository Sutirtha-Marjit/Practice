import { Component, OnInit } from '@angular/core';
import {} from '@angular/common';
import {FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-vendor-dash-board',
  templateUrl: './vendor-dash-board.component.html',
  styleUrls: ['./vendor-dash-board.component.css'],
  
})
export class VendorDashBoardComponent implements OnInit {

  vendorFromGroup:FormGroup;
  vendorName:FormControl;
  vendorEmail:FormControl;
  vendorPhone:FormControl;

  constructor(private fromBuilder:FormBuilder) {

    this.vendorName = new FormControl('',Validators.required);
    this.vendorEmail = new FormControl('',[Validators.required,Validators.email]);
    this.vendorPhone = new FormControl('',[Validators.required,Validators.minLength(10)]);

  
    this.vendorFromGroup = this.fromBuilder.group({
      vendorName: this.vendorName,
      vendorEmail: this.vendorEmail,
      vendorPhone: this.vendorPhone,
    });
   }

  ngOnInit() {
    
  }

}
