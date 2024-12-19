import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PesobotePagePage } from './pesobote-page.page';

describe('PesobotePagePage', () => {
  let component: PesobotePagePage;
  let fixture: ComponentFixture<PesobotePagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PesobotePagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
