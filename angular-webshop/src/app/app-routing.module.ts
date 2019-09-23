import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdersComponent } from './page/orders/orders.component';
import { UpdateOrdersComponent } from './page/update-orders/update-orders.component';
import { CreateOrdersComponent } from './page/create-orders/create-orders.component';
import { UsersComponent } from './page/users/users.component';
import { UpdateUsersComponent } from './page/update-users/update-users.component';
import { ProjectsComponent } from './projects/projects.component';
import { AppComponent } from './app.component';
import { ProjectAddComponent } from './project-add/project-add.component';
import { ProjectEditComponent } from './project-edit/project-edit.component';


const routes: Routes = [
  {
    path: '',
    component: OrdersComponent
  },
  {
    path: 'orders/:id',
    component: UpdateOrdersComponent
  },
  {
    path: 'create-order',
    component: CreateOrdersComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'users/:id',
    component: UpdateUsersComponent
  },
  {
    path: 'create-user',
    component: CreateOrdersComponent
  },
  {
    path: '**',
    component: OrdersComponent
  },
];




const routes: Routes = [
  { path: 'projects', component: ProjectsComponent },
  { path: 'projectAdd', component: ProjectAddComponent },
  { path: 'projectEdit/:id', component: ProjectEditComponent },
  { path: '**', component: AppComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
