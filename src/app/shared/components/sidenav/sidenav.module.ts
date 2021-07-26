import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav.component';
import { RouterModule } from '@angular/router';
import { LinksComponent } from './components/links/links.component';
import { PerfilComponent } from './components/perfil/perfil.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';


@NgModule({
  declarations: [
    SidenavComponent,
    LinksComponent,
    PerfilComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatListModule,
    MatDividerModule,
    MatExpansionModule
  ],
  exports: [SidenavComponent]
})
export class SidenavModule { }
