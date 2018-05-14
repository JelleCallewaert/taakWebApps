import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenodigdheidComponent } from './benodigdheid.component';

describe('BenodigdheidComponent', () => {
  let component: BenodigdheidComponent;
  let fixture: ComponentFixture<BenodigdheidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenodigdheidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenodigdheidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
