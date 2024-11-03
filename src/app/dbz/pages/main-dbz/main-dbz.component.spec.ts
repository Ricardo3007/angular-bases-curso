/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MainDbzComponent } from './main-dbz.component';

describe('MainDbzComponent', () => {
  let component: MainDbzComponent;
  let fixture: ComponentFixture<MainDbzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainDbzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainDbzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
