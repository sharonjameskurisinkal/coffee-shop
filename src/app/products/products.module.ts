import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { productReducer } from './product-reducer';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffect } from './product-effect';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent
  ],
  imports: [
    MatCardModule,
    CommonModule,
    ProductsRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatPaginatorModule,
    StoreModule.forFeature('product', productReducer),
    EffectsModule.forFeature([ProductEffect]),
  ]
})
export class ProductsModule { }
