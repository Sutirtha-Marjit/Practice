import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentgridComponent } from './studentgrid.component';

describe('StudentgridComponent', () => {
  let component: StudentgridComponent;
  let fixture: ComponentFixture<StudentgridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentgridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
