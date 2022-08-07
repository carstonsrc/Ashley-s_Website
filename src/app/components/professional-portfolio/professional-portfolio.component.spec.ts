import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalPortfolioComponent } from './professional-portfolio.component';

describe('ProfessionalPortfolioComponent', () => {
  let component: ProfessionalPortfolioComponent;
  let fixture: ComponentFixture<ProfessionalPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessionalPortfolioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessionalPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
