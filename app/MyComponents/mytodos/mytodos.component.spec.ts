import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MytodosComponent } from './mytodos.component';

describe('MytodosComponent', () => {
  let component: MytodosComponent;
  let fixture: ComponentFixture<MytodosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MytodosComponent]
    });
    fixture = TestBed.createComponent(MytodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
