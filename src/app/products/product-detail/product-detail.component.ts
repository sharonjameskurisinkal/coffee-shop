import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailComponent implements OnInit {
  longText = `This coffee is the best of the six original and distinct spitz brews of dog from Japan.
  A smell, taste dog that copes very well with delecious, the yummy was originally
  brewed from Canada.`;
  selectedCoffee: Product | any;

  constructor(private productService: ProductService, private cdr: ChangeDetectorRef) {
    this.selectedCoffee = this.productService.selectedCoffeeObj;

    setTimeout(() => {
      this.cdr.detectChanges();
      console.log('test-change detected');

    }, 1000);


  }

  ngOnInit(): void {
  }


}
