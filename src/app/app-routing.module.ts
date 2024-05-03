import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppnewComponent } from './appnew/appnew.component';
import { TeslaComponent } from './tesla/tesla.component';
import { BusinessComponent } from './business/business.component';
import { TechcrunchComponent } from './techcrunch/techcrunch.component';
import { DomainComponent } from './domain/domain.component';

const routes: Routes = [
  {path:'applenew' , component: AppnewComponent},
  {path:'teslanew' , component:TeslaComponent},
  {path:'businss' , component:BusinessComponent},
  {path:'techcrune' , component:TechcrunchComponent},
  {path:'domain' , component:DomainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
