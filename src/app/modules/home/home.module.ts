import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NavigatorModule } from '@components/navigator/navigator.module';
import { SidenavModule } from '@components/sidenav/sidenav.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NavigatorModule,
    SidenavModule
  ]
})
export class HomeModule { }
