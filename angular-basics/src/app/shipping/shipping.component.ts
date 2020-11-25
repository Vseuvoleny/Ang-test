import { Component, OnInit } from '@angular/core';
import { CartComponent } from '../cart/cart.component'

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent implements OnInit {
  shippingCosts;
  constructor(
    private CartComponent: CartComponent
  ) { 
    this.shippingCosts = this.CartComponent.getShippingPrices();
  }

  ngOnInit(): void {
  }

}
