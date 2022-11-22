import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectonumericoComponent } from './selectonumerico.component';

describe('SelectonumericoComponent', () => {
  let component: SelectonumericoComponent;
  let fixture: ComponentFixture<SelectonumericoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectonumericoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectonumericoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
