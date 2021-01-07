/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HeroicInformationComponent } from './heroic-information.component';

describe('HeroicInformationComponent', () => {
  let component: HeroicInformationComponent;
  let fixture: ComponentFixture<HeroicInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroicInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroicInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
