import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartTimeMIComponent } from './part-time-mi.component';

describe('PartTimeMIComponent', () => {
  let component: PartTimeMIComponent;
  let fixture: ComponentFixture<PartTimeMIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartTimeMIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartTimeMIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
