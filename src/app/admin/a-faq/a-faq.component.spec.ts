import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AFaqComponent } from './a-faq.component';

describe('AFaqComponent', () => {
  let component: AFaqComponent;
  let fixture: ComponentFixture<AFaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AFaqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
