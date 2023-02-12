import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZakazaniComponent } from './zakazani.component';

describe('ZakazaniComponent', () => {
  let component: ZakazaniComponent;
  let fixture: ComponentFixture<ZakazaniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZakazaniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZakazaniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
