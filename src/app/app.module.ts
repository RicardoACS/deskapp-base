import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PreLoadComponent } from './view/pre-load/pre-load.component';
import { HeaderComponent } from './view/menu/header/header.component';
import { SideBarComponent } from './view/menu/side-bar/side-bar.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  declarations: [
    AppComponent,
    PreLoadComponent,
    HeaderComponent,
    SideBarComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    NgApexchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
