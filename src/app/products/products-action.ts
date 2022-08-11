import { createAction, props } from '@ngrx/store';
import { Product } from './product';
 
export const invokeProductsAPI = createAction(
  '[Products API] Invoke Products Fetch API'
);
 
export const productsFetchAPISuccess = createAction(
  '[Products API] Fetch API Success',
  props<{ allProducts: Product[] }>()
);
