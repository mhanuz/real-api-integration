import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';




@NgModule({
  declarations:[
    HomeComponent,
    AdminComponent,
    SidebarComponent
  ],

  imports: [
    BrowserModule,
    PagesRoutingModule

  ],
  providers: [],

})
export class PagesModule { }