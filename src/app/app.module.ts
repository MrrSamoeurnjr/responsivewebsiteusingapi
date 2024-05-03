import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppnewComponent } from './appnew/appnew.component';
import { TeslaComponent } from './tesla/tesla.component';
import { BusinessComponent } from './business/business.component';
import { TechcrunchComponent } from './techcrunch/techcrunch.component';
import { DomainComponent } from './domain/domain.component';

@NgModule({
  declarations: [
    AppComponent,
    AppnewComponent,
    TeslaComponent,
    BusinessComponent,
    TechcrunchComponent,
    DomainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
