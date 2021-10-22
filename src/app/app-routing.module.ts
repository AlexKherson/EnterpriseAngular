import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RoleLinkComponent } from './components/role-link/role-link.component';
import { ProductsComponent } from './components/products/products.component';


const routes: Routes = [
  // {path:"",component:MainPageComponent, pathMatch:"full"},
  {path:"loginForm",component: LoginFormComponent},
  {path:"roleLink",component:RoleLinkComponent},
  {path:"roleLink/admin",component:AdminComponent},
  {path:"roleLink/products",component:ProductsComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
