import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { DataFormComponent } from './components/data-form/data-form.component';
import { DataListComponent } from './components/data-list/data-list.component';
import { AppRoutingmodule } from './components/app.routing';
import { FormDebugComponent } from './components/form-debug/form-debug.component';

@NgModule({
  declarations: [
    AppComponent,
    DataFormComponent,
    DataListComponent,
    FormDebugComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingmodule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
