import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterialModule } from './_module/material.module';
import { ApiTableComponent } from './component/api-table/api-table.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './component/header/header.component';
import { ApiMapComponent } from './component/api-map/api-map.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { ApiChartComponent } from './component/api-chart/api-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    ApiTableComponent,
    HeaderComponent,
    ApiMapComponent,
    ApiChartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    LeafletModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
