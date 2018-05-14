import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpelDetailComponent } from './spel-detail.component';

describe('SpelDetailComponent', () => {
  let component: SpelDetailComponent;
  let fixture: ComponentFixture<SpelDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpelDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpelDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
