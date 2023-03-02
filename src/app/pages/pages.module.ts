import { NgModule } from '@angular/core';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';




@NgModule({
  declarations:[
    HomeComponent,
    AdminComponent,
    SidebarComponent
  ],

  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  providers: [],

})
export class PagesModule { }