import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartboxComponent } from './startbox.component';

describe('StartboxComponent', () => {
  let component: StartboxComponent;
  let fixture: ComponentFixture<StartboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
