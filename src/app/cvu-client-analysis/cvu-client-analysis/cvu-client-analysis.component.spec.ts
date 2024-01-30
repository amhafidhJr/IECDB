import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvuClientAnalysisComponent } from './cvu-client-analysis.component';

describe('CvuClientAnalysisComponent', () => {
  let component: CvuClientAnalysisComponent;
  let fixture: ComponentFixture<CvuClientAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvuClientAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvuClientAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
