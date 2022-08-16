import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareItemComponent } from './software-item.component';

describe('SoftwareItemComponent', () => {
  let component: SoftwareItemComponent;
  let fixture: ComponentFixture<SoftwareItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftwareItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftwareItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
