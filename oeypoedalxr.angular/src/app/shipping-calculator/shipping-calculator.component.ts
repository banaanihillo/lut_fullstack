import {
    Component,
    OnInit
} from '@angular/core'
import {ShoppingCartService} from "../shopping-cart.service"

@Component({
  selector: 'app-shipping-calculator',
  templateUrl: './shipping-calculator.component.html',
  styleUrls: ['./shipping-calculator.component.css']
})

export class ShippingCalculatorComponent implements OnInit {
    shippingCosts

  constructor(
      private shoppingCartService: ShoppingCartService
  ) {

  }

  ngOnInit() {
      this.shippingCosts = this.shoppingCartService.getShippingPrices()
  }

}
