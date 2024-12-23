/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AluguelComponent } from './aluguel.component';

describe('AluguelComponent', () => {
  let component: AluguelComponent;
  let fixture: ComponentFixture<AluguelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AluguelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AluguelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
