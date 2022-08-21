import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialNetFormComponent } from './social-net-form.component';

describe('SocialNetFormComponent', () => {
  let component: SocialNetFormComponent;
  let fixture: ComponentFixture<SocialNetFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialNetFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialNetFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
