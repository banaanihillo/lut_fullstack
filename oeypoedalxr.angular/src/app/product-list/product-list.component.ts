import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;
  /*
  otherThings

  constructor(
      private shoppingCartService: ShoppingCartService
  ) {

  }
  */

  share() {
      /*
      this.otherThings = this.shoppingCartService.getOtherThings()
      console.log(this.otherThings)
      //oh right, that's just an Observable as well
      */

      console.log("Shared something with someone")
  }

  onNotify() {
      window.alert("Subscription to price updates successful.")
  }
}


/*aaaa
aaaaaaaaaaaa
*/
