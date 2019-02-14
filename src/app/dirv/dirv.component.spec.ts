import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirvComponent } from './dirv.component';

describe('DirvComponent', () => {
  let component: DirvComponent;
  let fixture: ComponentFixture<DirvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
