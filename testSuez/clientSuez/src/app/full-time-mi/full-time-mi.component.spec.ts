import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullTimeMIComponent } from './full-time-mi.component';

describe('FullTimeMIComponent', () => {
  let component: FullTimeMIComponent;
  let fixture: ComponentFixture<FullTimeMIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullTimeMIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullTimeMIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
