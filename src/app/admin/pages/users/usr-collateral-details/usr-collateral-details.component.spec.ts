import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrCollateralDetailsComponent } from './usr-collateral-details.component';

describe('UsrCollateralDetailsComponent', () => {
  let component: UsrCollateralDetailsComponent;
  let fixture: ComponentFixture<UsrCollateralDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsrCollateralDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrCollateralDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
