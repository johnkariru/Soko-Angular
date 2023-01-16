import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { MenuComponent } from './mobile/menu/menu.component';

const routes: Routes = [
  // { path: 'mobile', component: MenuComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
