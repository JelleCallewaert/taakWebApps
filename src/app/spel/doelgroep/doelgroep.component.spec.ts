import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoelgroepComponent } from './doelgroep.component';

describe('DoelgroepComponent', () => {
  let component: DoelgroepComponent;
  let fixture: ComponentFixture<DoelgroepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoelgroepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoelgroepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
