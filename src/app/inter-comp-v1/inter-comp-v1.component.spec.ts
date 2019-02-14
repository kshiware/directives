import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterCompV1Component } from './inter-comp-v1.component';

describe('InterCompV1Component', () => {
  let component: InterCompV1Component;
  let fixture: ComponentFixture<InterCompV1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterCompV1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterCompV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
