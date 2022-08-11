import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Product } from './product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private selectedCoffee = new BehaviorSubject('');
  selectedCoffeeObj = this.selectedCoffee.asObservable();
  
  private apiUrl = environment.apiURL;

  constructor(private http: HttpClient) { }

  getAllProducts() {
    console.log(this.apiUrl);
    return this.http.get<Product[]>(this.apiUrl);
  }
}
