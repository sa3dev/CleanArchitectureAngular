import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingComponent } from './core-routing/core-routing.component';
import { ComponentsComponent } from './user/login/components/components.component';
import { LoginComponent } from './user/login/login.component';
import { HeaderComponent } from './header/header.component';
import { ListuserComponent } from './user/listuser/listuser.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CoreRoutingComponent, ComponentsComponent, LoginComponent, HeaderComponent, ListuserComponent]
})
export class CoreModule { }
