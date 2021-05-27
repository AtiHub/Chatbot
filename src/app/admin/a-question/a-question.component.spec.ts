import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AQuestionComponent } from './a-question.component';

describe('AQuestionComponent', () => {
  let component: AQuestionComponent;
  let fixture: ComponentFixture<AQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
