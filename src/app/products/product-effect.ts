import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { EMPTY, map, mergeMap, withLatestFrom } from 'rxjs';
import { productsFetchAPISuccess, invokeProductsAPI } from './products-action';
import { ProductService } from './product.service';
import { selectProducts } from './product-selector';
import { Product } from './product';
 
@Injectable()
export class ProductEffect {
  constructor(
    private actions$: Actions,
    private productService: ProductService,
    private store: Store
  ) {}
 
  loadAllProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(invokeProductsAPI),
      withLatestFrom(this.store.pipe(select(selectProducts))),
      mergeMap(([, productsformStore]) => {
        if (productsformStore.length > 0) {
          return EMPTY;
        }
        return this.productService
          .getAllProducts()
          .pipe(map((data) => productsFetchAPISuccess({ allProducts: data })));
      })
    )
  );
}


