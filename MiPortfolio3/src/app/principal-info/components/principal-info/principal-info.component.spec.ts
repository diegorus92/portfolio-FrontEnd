import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalInfoComponent } from './principal-info.component';

describe('PrincipalInfoComponent', () => {
  let component: PrincipalInfoComponent;
  let fixture: ComponentFixture<PrincipalInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
