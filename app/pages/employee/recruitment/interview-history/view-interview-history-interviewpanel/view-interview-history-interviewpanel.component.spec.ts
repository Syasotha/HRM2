import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewInterviewHistoryInterviewpanelComponent } from './view-interview-history-interviewpanel.component';

describe('ViewInterviewHistoryInterviewpanelComponent', () => {
  let component: ViewInterviewHistoryInterviewpanelComponent;
  let fixture: ComponentFixture<ViewInterviewHistoryInterviewpanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewInterviewHistoryInterviewpanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewInterviewHistoryInterviewpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
