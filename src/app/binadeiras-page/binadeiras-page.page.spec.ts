import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BinadeirasPagePage } from './binadeiras-page.page';

describe('BinadeirasPagePage', () => {
  let component: BinadeirasPagePage;
  let fixture: ComponentFixture<BinadeirasPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BinadeirasPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
