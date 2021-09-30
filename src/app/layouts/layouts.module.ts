import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FullComponent } from './full/full.component';
import { RouterModule } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';



@NgModule({
  declarations: [
    FullComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MenubarModule
  ]
})
export class LayoutsModule { }
