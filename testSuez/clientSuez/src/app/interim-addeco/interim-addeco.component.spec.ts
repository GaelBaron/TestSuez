import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterimAddecoComponent } from './interim-addeco.component';

describe('InterimAddecoComponent', () => {
  let component: InterimAddecoComponent;
  let fixture: ComponentFixture<InterimAddecoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterimAddecoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterimAddecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
