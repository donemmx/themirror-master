import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagePricingCardComponent } from './package-pricing-card.component';

describe('PackagePricingCardComponent', () => {
  let component: PackagePricingCardComponent;
  let fixture: ComponentFixture<PackagePricingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackagePricingCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackagePricingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
