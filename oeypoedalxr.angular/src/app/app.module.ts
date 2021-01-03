import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {
    HttpClientModule as HTTPClientModule
} from "@angular/common/http"

import {AppComponent} from './app.component';
import {TopBarComponent} from './top-bar/top-bar.component';
import {
    ProductListComponent
} from './product-list/product-list.component'

import {
    ProductNotificationsComponent
} from './product-notifications/product-notifications.component'

import {
    ProductInformationComponent
} from './product-information/product-information.component'

import {
    ShoppingCartComponent
} from './shopping-cart/shopping-cart.component';
import {
    ShippingCalculatorComponent
} from './shipping-calculator/shipping-calculator.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HTTPClientModule,
    RouterModule.forRoot([
        {
            path: "",
            component: ProductListComponent
        },
        {
            path: "products/:productid",
            component: ProductInformationComponent
        },
        {
            path: "shopping-cart",
            component: ShoppingCartComponent
        },
        {
            path: "shipping-calculator",
            component: ShippingCalculatorComponent
        }
    ])
  ],
  declarations: [				
    AppComponent,
    TopBarComponent,
    ProductListComponent,
      ProductNotificationsComponent,
      ProductInformationComponent,
      ShoppingCartComponent,
      ShippingCalculatorComponent
   ],
  bootstrap: [ AppComponent ]
})

export class AppModule {

}


/*
aaaaaaaaaaaaaaaaaaaa
*/
