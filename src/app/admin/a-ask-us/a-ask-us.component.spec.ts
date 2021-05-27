import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AAskUsComponent } from './a-ask-us.component';

describe('AAskUsComponent', () => {
  let component: AAskUsComponent;
  let fixture: ComponentFixture<AAskUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AAskUsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AAskUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
