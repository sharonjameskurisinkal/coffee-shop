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
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, AfterViewInit {

  constructor(private store: Store, private productService: ProductService, private router: Router) { }
  // const ELEMENT_DATA: Product[] = this.products;
  products = this.store.pipe(select(selectProducts));
  displayedColumns: string[] = ['rowIndex', 'blendName', 'intensifier', 'origin', 'variety', 'notes'];
  dataSource = new MatTableDataSource<Product>;
  @ViewChild(MatPaginator) paginator: MatPaginator | any;

  ngOnInit(): void {
    this.store.dispatch(invokeProductsAPI());
    console.log(this.products);

  }

  ngAfterViewInit() {
    let ELEMENT_DATA;
    this.products.subscribe(data => {
      console.log(data);
      ELEMENT_DATA = data;

      this.dataSource = new MatTableDataSource<Product>(ELEMENT_DATA);
      this.dataSource.paginator = this.paginator;
    })

    console.log(ELEMENT_DATA);

    console.log(this.dataSource);

  }

  viewDetailPage(row: any) {
    console.log(row);
    this.productService.selectedCoffeeObj = row;
    this.router.navigate(['coffee']);



  }

}


