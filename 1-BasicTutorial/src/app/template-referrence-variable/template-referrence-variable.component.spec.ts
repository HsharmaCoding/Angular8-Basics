import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateReferrenceVariableComponent } from './template-referrence-variable.component';

describe('TemplateReferrenceVariableComponent', () => {
  let component: TemplateReferrenceVariableComponent;
  let fixture: ComponentFixture<TemplateReferrenceVariableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateReferrenceVariableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateReferrenceVariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
