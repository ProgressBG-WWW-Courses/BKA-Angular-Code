import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { TDFComponent } from './tdf/tdf.component';
import { DemoTDFComponent } from './demo-tdf/demo-tdf.component';
import { DemoRfComponent } from './demo-rf/demo-rf.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    TDFComponent,
    DemoTDFComponent,
    DemoRfComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
