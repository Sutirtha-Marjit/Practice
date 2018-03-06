import {TestBed, ComponentFixture, async} from '@angular/core/testing';
import { FormsModule,FormControl } from '@angular/forms';
import {BusinessListComponent} from './business-list.component';
import{DebugElement} from '@angular/core';
import{By} from '@angular/platform-browser'; 


describe('Business list component test suite',()=>{

  let compfixture:ComponentFixture<BusinessListComponent>;
  let compinstance:BusinessListComponent;
  let addButton:HTMLElement;
 
  beforeEach(async(()=>{
        TestBed.configureTestingModule({
          imports:[FormsModule],
          declarations:[BusinessListComponent]
        }).compileComponents();
    }));

  beforeEach(()=>{
    compfixture = TestBed.createComponent(BusinessListComponent);
    compinstance = compfixture.componentInstance;
    addButton = compfixture.debugElement.query(By.css('input[type="button"]')).nativeElement;

  });


  it("crActivity should contain 2 properties",()=>{    
    expect(Object.keys(compinstance.crActibity)).toEqual(["activity","managerName"]);
  });

  it("add button have btn class",()=>{   
    let classNames = addButton.getAttribute('class'); 
    expect(classNames.indexOf('btn')).toBeGreaterThan(-1);
  });

   it("add button must have some text content",()=>{      
    expect(addButton.getAttribute('value').length).toBeGreaterThan(0);
  });

  it("isActivityBlank should return false when blank object passed to it",()=>{
      compinstance.crActibity.activity="qwqw";
      compinstance.crActibity.managerName="aasasa"; 
      expect(compinstance.isActivityBlank()).toBe(false);
  });


});