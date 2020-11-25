import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartComponent } from '../cart/cart.component';
import { products } from '../products';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product;

  constructor(
    private route: ActivatedRoute,
    private CartComponent: CartComponent
  ) { }
  addToCart(product) {
    window.alert('Your product has been added to the cart!');
    this.CartComponent.addToCart(product);
  }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    });
  }

}
