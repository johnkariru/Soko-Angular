import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  { path: 'mobile', loadChildren: () => import('./mobile/mobile.module').then(m => m.MobileModule) },
  { path: 'web', loadChildren: () => import('./web/web.module').then(m => m.WebModule) },
  { path: '', redirectTo: 'mobile', pathMatch: 'full' },
  { path: '**', redirectTo: 'mobile' }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
