import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputselectorComponent } from './inputselector.component';

describe('InputselectorComponent', () => {
  let component: InputselectorComponent;
  let fixture: ComponentFixture<InputselectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputselectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputselectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
