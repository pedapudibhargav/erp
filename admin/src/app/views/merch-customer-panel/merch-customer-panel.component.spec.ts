import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchCustomerPanelComponent } from './merch-customer-panel.component';

describe('MerchCustomerPanelComponent', () => {
  let component: MerchCustomerPanelComponent;
  let fixture: ComponentFixture<MerchCustomerPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchCustomerPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchCustomerPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
