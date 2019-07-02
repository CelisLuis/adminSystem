import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Routes
import { AdminContentComponent } from './admin/admin-content/admin-content.component';
import { AdminGastosComponent } from './admin/admin-gastos/admin-gastos.component';



const routes: Routes = [
  { path: 'admin', component: AdminContentComponent},
  { path: 'admingastos', component: AdminGastosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
