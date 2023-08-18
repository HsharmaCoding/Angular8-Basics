import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NormalSelectorComponent } from './normal-selector/normal-selector.component';
import { ClassSelectorComponent } from './class-selector/class-selector.component';
import { AttributeSelectorComponent } from './attribute-selector/attribute-selector.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TemplateReferrenceVariableComponent } from './template-referrence-variable/template-referrence-variable.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { NgIfDirectiveComponent } from './ng-if-directive/ng-if-directive.component';
import { NgSwitchDirectiveComponent } from './ng-switch-directive/ng-switch-directive.component';
import { NgForDirectiveComponent } from './ng-for-directive/ng-for-directive.component';
import { ComponentInteractionComponent } from './component-interaction/component-interaction.component';
import { PipesComponent } from './pipes/pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    NormalSelectorComponent,
    ClassSelectorComponent,
    AttributeSelectorComponent,
    InterpolationComponent,
    PropertybindingComponent,
    ClassBindingComponent,
    StyleBindingComponent,
    EventBindingComponent,
    TemplateReferrenceVariableComponent,
    TwoWayBindingComponent,
    NgIfDirectiveComponent,
    NgSwitchDirectiveComponent,
    NgForDirectiveComponent,
    ComponentInteractionComponent,
    PipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
