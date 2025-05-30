import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../../../login-app/src/app/modules/authentication/authentication.module').then((m) =>{
        return m.AuthenticationModule
      } ),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('../../../home-app/src/app/modules/home/home-routing.module').then((m) =>{
        return m.HomeRoutingModule
      } ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
