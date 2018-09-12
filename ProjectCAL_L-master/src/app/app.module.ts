import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { dashboardComponent } from './dashboard/dashboard.component';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbSidebarService, NbCardModule, NbCheckboxModule,
   NbMenuModule, NbPopoverModule, NbActionsModule, NbSearchModule, NbTabsetModule, NbUserModule, NbBadgeModule, 
   NbContextMenuModule, NbRouteTabsetModule, NbProgressBarModule, NbAlertModule,} from '@nebular/theme';
import { accessroleComponent } from './accessrole/accessrole.component';
import { applicationComponent } from './application/application.component';
import { auditlogComponent } from './auditlog/auditlog.component';
import { employeeComponent } from './employee/employee.component';
import { packageComponent } from './package/package.component';
import { pricingComponent } from './pricing/pricing.component';
import { reportsComponent } from './reports/reports.component';
import { senderComponent } from './sender/sender.component';
import { shipmentagentsComponent } from './shipmentagents/shipmentagents.component';
import { vehicleComponent } from './vehicle/vehicle.component';
import { vehicletypeComponent } from './vehicletype/vehicletype.component';
import {HttpClientModule} from '@angular/common/http'
import{FormsModule} from '@angular/forms'
import { fromEventPattern } from '../../node_modules/rxjs';
import { settingsComponent } from './settings/settings.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { DxCheckBoxModule,
  DxSelectBoxModule,
  DxNumberBoxModule,
  DxFormModule, DxDataGridModule,DxMenuModule, DxChartModule,DxMapModule, DxPieChartModule,DxButtonModule } from 'devextreme-angular';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    dashboardComponent,
    accessroleComponent,
    applicationComponent,
    auditlogComponent,
    employeeComponent,
    packageComponent,
    pricingComponent,
    reportsComponent,
    senderComponent,
    shipmentagentsComponent,
    vehicleComponent,
    vehicletypeComponent,
    settingsComponent,
    LoginComponent,
 
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbSidebarModule,
    NbContextMenuModule,
    DxMapModule,
    NbCardModule,
    HttpClientModule,
FormsModule,
DxDataGridModule,
DxPieChartModule,
DxButtonModule,
   // NbCalendarKitModule,
    //NbCalendarModule,
  //  NbCalendarRangeModule,
    //NbCheckboxModule,
    NbLayoutModule,
    NbMenuModule,
    NbPopoverModule,
    NbActionsModule,
    NbSearchModule,
    NbTabsetModule,
    NbUserModule,
    NbBadgeModule,
    NbContextMenuModule,
    NbRouteTabsetModule,
    NbProgressBarModule,
    NbAlertModule,
    DxMenuModule,
    DxSelectBoxModule,
        DxCheckBoxModule,
        DxChartModule,
   // NbChatModule,
   // NbSpinnerModule,
   // NbStepperModule,
  //  NbAccordionModule,
   // NbListModule,
  //  NbButtonModule,
   // NbInputModule,
 
   DxCheckBoxModule,
   DxSelectBoxModule,
   DxNumberBoxModule,
   DxFormModule
  ],
  providers: [NbSidebarService],
  bootstrap: [AppComponent]
})
export class AppModule { }


platformBrowserDynamic().bootstrapModule(AppModule);