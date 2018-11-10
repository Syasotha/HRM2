import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewInterviewHistoryInterviewdetailsComponent } from './view-interview-history-interviewdetails.component';

describe('ViewInterviewHistoryInterviewdetailsComponent', () => {
  let component: ViewInterviewHistoryInterviewdetailsComponent;
  let fixture: ComponentFixture<ViewInterviewHistoryInterviewdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewInterviewHistoryInterviewdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewInterviewHistoryInterviewdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
