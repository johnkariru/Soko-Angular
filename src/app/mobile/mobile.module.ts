import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MobileHomeComponent as MobileHomeComponent } from './mobile_home/mobile_home.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule, Routes } from '@angular/router';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { AdvertsComponent } from './adverts/adverts.component';
import { CategoryComponent } from './category/category.component';
import { ProductsComponent } from './products/products.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';



const routes: Routes = [
  { path: 'home', component: MobileHomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];


@NgModule({
  declarations: [
    MobileHomeComponent,
    SearchbarComponent,
    AdvertsComponent,
    CategoryComponent,
    ProductsComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    LayoutModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatDividerModule,
    MatGridListModule
  ]
})
export class MobileModule { }
