import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrAllocationDetailComponent } from './usr-allocation-detail.component';

describe('UsrAllocationDetailComponent', () => {
  let component: UsrAllocationDetailComponent;
  let fixture: ComponentFixture<UsrAllocationDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrAllocationDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrAllocationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
