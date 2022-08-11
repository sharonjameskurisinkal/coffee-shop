

import { createReducer,on } from "@ngrx/store";
import { Product } from "./product";
import { productsFetchAPISuccess } from './products-action';
export const initialState: ReadonlyArray<Product> = [];
 
export const productReducer = createReducer(
    initialState,
    on(productsFetchAPISuccess, (state, { allProducts }) => {
        return allProducts;
      })
);
