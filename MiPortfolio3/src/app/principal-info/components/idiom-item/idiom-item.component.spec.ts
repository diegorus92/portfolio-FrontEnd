import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdiomItemComponent } from './idiom-item.component';

describe('IdiomItemComponent', () => {
  let component: IdiomItemComponent;
  let fixture: ComponentFixture<IdiomItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdiomItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdiomItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
