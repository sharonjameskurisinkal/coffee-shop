import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { invokeProductsAPI } from '../products-action';
import { selectProducts } from '../product-selector';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent implements OnInit, AfterViewInit {

  constructor(private store: Store, private productService: ProductService, private router: Router) { }
  products = this.store.pipe(select(selectProducts));
  displayedColumns: string[] = ['rowIndex', 'blendName', 'intensifier', 'origin', 'variety', 'notes'];
  dataSource = new MatTableDataSource<Product>;
  @ViewChild(MatPaginator) paginator: MatPaginator | any;

  ngOnInit(): void {
    this.store.dispatch(invokeProductsAPI());
  }

  ngAfterViewInit() {
    let elementData;
    this.products.subscribe(data => {
      elementData = data;
      this.dataSource = new MatTableDataSource<Product>(elementData);
      this.dataSource.paginator = this.paginator;
    })

  }

//Method to navigate to detail page
  viewDetailPage(row: any) {
    this.productService.selectedCoffeeObj = row;
    this.router.navigate(['coffee']);
  }

  ngOnDestroy(): void {
  }


}


