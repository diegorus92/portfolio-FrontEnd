import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalExpItemComponent } from './professional-exp-item.component';

describe('ProfessionalExpItemComponent', () => {
  let component: ProfessionalExpItemComponent;
  let fixture: ComponentFixture<ProfessionalExpItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessionalExpItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessionalExpItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
