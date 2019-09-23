import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdersComponent } from './page/orders/orders.component';
import { UpdateOrdersComponent } from './page/update-orders/update-orders.component';
import { CreateOrdersComponent } from './page/create-orders/create-orders.component';
import { UsersComponent } from './page/users/users.component';
import { UpdateUsersComponent } from './page/update-users/update-users.component';
import { CreateUsersComponent } from './page/create-users/create-users.component';
import { NavComponent } from './nav/nav.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectAddComponent } from './project-add/project-add.component';
import { ProjectEditComponent } from './project-edit/project-edit.component'

@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    ProjectsComponent,
    ProjectAddComponent,
    ProjectEditComponent,
    UpdateOrdersComponent,
    CreateOrdersComponent,
    UsersComponent,
    UpdateUsersComponent,
    CreateUsersComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
