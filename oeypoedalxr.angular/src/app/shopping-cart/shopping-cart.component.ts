import {
    Component,
    OnInit
} from '@angular/core'
import {FormBuilder} from "@angular/forms"
import {ShoppingCartService} from "../shopping-cart.service"

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})

export class ShoppingCartComponent implements OnInit {

    items
    checkoutForm

  constructor(
      private shoppingCartService: ShoppingCartService,
      private formBuilder: FormBuilder
  ) {
      this.checkoutForm = this.formBuilder.group({
          name: "",
          address: ""
      })
  }

  ngOnInit() {
      this.items = this.shoppingCartService.getItems()
  }

  onSubmit(customerInformation) {
      console.log(customerInformation)
      //send that somewhere? or just clear the cart
      this.items = this.shoppingCartService.clearCart()
      this.checkoutForm.reset()
  }

}
