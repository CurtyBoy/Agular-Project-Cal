import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { dashboardComponent } from './dashboard/dashboard.component';
import {accessroleComponent } from './accessrole/accessrole.component';
import {applicationComponent } from './application/application.component';
import {auditlogComponent } from './auditlog/auditlog.component';
import {employeeComponent } from './employee/employee.component';
import {packageComponent } from './package/package.component';
import {pricingComponent } from './pricing/pricing.component';
import {reportsComponent } from './reports/reports.component';
import {senderComponent } from './sender/sender.component';
import {shipmentagentsComponent } from './shipmentagents/shipmentagents.component';
import {vehicleComponent } from './vehicle/vehicle.component';
import {vehicletypeComponent } from './vehicletype/vehicletype.component';
import { AppComponent } from './app.component';
import { settingsComponent } from './settings/settings.component';


const routes: Routes = [
  
  { path: 'dashboard', component: dashboardComponent },
  { path: 'accessrole', component: accessroleComponent },
  { path: 'application', component: applicationComponent },
  { path: 'auditlog', component: auditlogComponent },
  { path: 'employee', component: employeeComponent}, 
  { path: 'package', component: packageComponent },
  { path: 'pricing', component: pricingComponent },
  { path: 'reports', component: reportsComponent },
  { path: 'sender', component: senderComponent },
  { path: 'shipmentagents', component: shipmentagentsComponent },
  { path: 'vehicle', component: vehicleComponent },
  { path: 'vehicletype', component: vehicletypeComponent },
  { path: 'settings', component: settingsComponent },
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}