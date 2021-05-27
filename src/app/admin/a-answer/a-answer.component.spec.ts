import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AAnswerComponent } from './a-answer.component';

describe('AAnswerComponent', () => {
  let component: AAnswerComponent;
  let fixture: ComponentFixture<AAnswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AAnswerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
