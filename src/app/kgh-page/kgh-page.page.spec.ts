import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KghPagePage } from './kgh-page.page';

describe('KghPagePage', () => {
  let component: KghPagePage;
  let fixture: ComponentFixture<KghPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(KghPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
