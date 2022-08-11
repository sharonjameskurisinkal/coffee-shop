import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailComponent implements OnInit {
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
  selectedCoffee: Product|any;
  wishList = false;

  constructor(private productService: ProductService,private cdr: ChangeDetectorRef) { 
  console.log(this.productService.selectedCoffeeObj);
  this.selectedCoffee = this.productService.selectedCoffeeObj;
  console.log(this.selectedCoffee);

  setTimeout(() => {
    this.cdr.detectChanges();
    console.log('test-change detected');
    
  }, 1000);
  
  
  }

  ngOnInit(): void {
  }

  check(){
    console.log('test123');
    
  }

}
