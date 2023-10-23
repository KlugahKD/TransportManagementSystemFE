import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './core/components/users/users.component';
import { BusesComponent } from './core/components/buses/buses.component';

const routes: Routes = [
  {
    path: 'admin/users',
    component: UsersComponent
  },
  {
    path: 'admin/buses',
    component: BusesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
