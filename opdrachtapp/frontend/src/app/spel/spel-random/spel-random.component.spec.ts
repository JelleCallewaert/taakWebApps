import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpelRandomComponent } from './spel-random.component';

describe('SpelRandomComponent', () => {
  let component: SpelRandomComponent;
  let fixture: ComponentFixture<SpelRandomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpelRandomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpelRandomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
