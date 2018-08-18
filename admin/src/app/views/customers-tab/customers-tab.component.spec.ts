import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersTabComponent } from './customers-tab.component';

describe('CustomersTabComponent', () => {
  let component: CustomersTabComponent;
  let fixture: ComponentFixture<CustomersTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomersTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
