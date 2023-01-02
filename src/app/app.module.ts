import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { GlobalErrorHandlerService } from './GlobalErrorHandleService';
import { HttpClientModule } from '@angular/common/http';
import { TDFORMComponent } from './tdf/tdf.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [
    AppComponent,
    HelloComponent,
    ParentComponent,
    ChildComponent,
    TDFORMComponent,
  ],
  bootstrap: [AppComponent],
  providers: [{ provide: ErrorHandler, useClass: GlobalErrorHandlerService }],
})
export class AppModule {}
