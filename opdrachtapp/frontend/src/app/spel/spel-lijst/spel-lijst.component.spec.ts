import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpelLijstComponent } from './spel-lijst.component';

describe('SpelLijstComponent', () => {
  let component: SpelLijstComponent;
  let fixture: ComponentFixture<SpelLijstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpelLijstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpelLijstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
