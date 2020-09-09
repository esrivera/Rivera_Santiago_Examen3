import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrudComponent } from "./componets/crud/crud.component";
import { NavbarComponent } from "./componets/navbar/navbar.component";
import { HomeComponent } from "./componets/home/home.component";
const routes: Routes = [
  {
    path: 'crud',
    component: CrudComponent
  },
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
