import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DescarguePagePage } from './descargue-page.page';

describe('DescarguePagePage', () => {
  let component: DescarguePagePage;
  let fixture: ComponentFixture<DescarguePagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DescarguePagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
