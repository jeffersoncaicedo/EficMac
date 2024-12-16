import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TorsionPagePage } from './torsion-page.page';

describe('TorsionPagePage', () => {
  let component: TorsionPagePage;
  let fixture: ComponentFixture<TorsionPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TorsionPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
