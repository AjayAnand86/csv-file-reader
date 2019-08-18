import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CSVReaderComponent } from './csv-reader.component';

@NgModule({
  declarations: [
    CSVReaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [CSVReaderComponent]
})
export class AppModule { }
