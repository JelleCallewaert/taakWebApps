import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSpelComponent } from './add-spel.component';

describe('AddSpelComponent', () => {
  let component: AddSpelComponent;
  let fixture: ComponentFixture<AddSpelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSpelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSpelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
