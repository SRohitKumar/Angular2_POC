import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PeggingReviewHeaderComponent } from './pegging-review-header/pegging-review-header.component';
import { PeggingInquiryComponentComponent } from './pegging-inquiry-component/pegging-inquiry-component.component';
import { SampleAppComponent } from './pegging-inquiry-component/sampleGrid';
import {AgGridModule} from 'ag-grid-ng2/main';

@NgModule({
  declarations: [
    AppComponent,
    PeggingReviewHeaderComponent,
    PeggingInquiryComponentComponent,
    SampleAppComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgGridModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
