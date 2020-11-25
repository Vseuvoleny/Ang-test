import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartComponent } from '../cart/cart.component'

@Component({
  selector: 'app-cart-serv',
  templateUrl: './cart-serv.component.html',
  styleUrls: ['./cart-serv.component.scss']
})
export class CartServComponent implements OnInit {
  items;
  checkoutForm;
  constructor(
    private CartComponent: CartComponent,
    private FormBuilder: FormBuilder
  ) {
    this.items = this.CartComponent.getItems();
    this.checkoutForm = FormBuilder.group({
      name: '',
      address: ''
    })
  }

  onSubmit(customerData) {
    // Process checkout data here
    console.warn('Your order has been submitted', customerData);

    this.items = this.CartComponent.clearCart();
    this.checkoutForm.reset();
  }
  ngOnInit(): void {
  }

}
