import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav.component';
import { RouterModule } from '@angular/router';
import { LinksComponent } from './components/links/links.component';
import { PerfilComponent } from './components/perfil/perfil.component';



@NgModule({
  declarations: [
    SidenavComponent,
    LinksComponent,
    PerfilComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [SidenavComponent]
})
export class SidenavModule { }
