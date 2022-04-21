import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAlgorithmComponent } from './menu-algorithm.component';

describe('MenuAlgorithmComponent', () => {
  let component: MenuAlgorithmComponent;
  let fixture: ComponentFixture<MenuAlgorithmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuAlgorithmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuAlgorithmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
