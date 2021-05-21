import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerHubComponent } from './answer-hub.component';

describe('AnswerHubComponent', () => {
  let component: AnswerHubComponent;
  let fixture: ComponentFixture<AnswerHubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnswerHubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
