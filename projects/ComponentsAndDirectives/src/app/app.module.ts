import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DirectivesComponent } from './directives/directives.component';
import { ComponentsComponent } from './components/components.component';
import { Task1Component } from './task1/task1.component';
import { CustomDirectiveExampleComponent } from './custom-directive-example/custom-directive-example.component';
import { CustomDirectiveDirective } from './custom-directive-example/custom-directive-example.component';
import { PipesComponent } from './pipes/pipes.component';
import { ReversePipe } from './pipes/pipes.component';
import { DirectivesTestComponent } from './directives-test/directives-test.component';
import { DirectivesTestLabsDirective } from './directives-test-labs.directive';
import { PipesLabsComponent } from './pipes-labs/pipes-labs.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectivesComponent,
    ComponentsComponent,
    Task1Component,
    CustomDirectiveDirective,
    CustomDirectiveExampleComponent,
    PipesComponent,
    ReversePipe,
    DirectivesTestComponent,
    DirectivesTestLabsDirective,
    PipesLabsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
