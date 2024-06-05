import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'',loadChildren:()=>import('./pages/accueil/accueil.module').then(m=>m.AccueilModule)},
    {path:'form-artisan',loadChildren:()=>import('./pages/form-artisan/form-artisan.module').then(m=>m.FormArtisanModule)},
    {path:'form-particulier',loadChildren:()=>import('./pages/form-particulier/form-particulier.module').then(m=>m.FormParticulierModule)}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
