import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessFundManagementComponent } from './business-fund-management.component';

describe('BusinessFundManagementComponent', () => {
  let component: BusinessFundManagementComponent;
  let fixture: ComponentFixture<BusinessFundManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessFundManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessFundManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
