import {Injectable} from '@angular/core';
import {HttpClient as HTTPClient} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})

export class ShoppingCartService {

    items = []
    addToCart(product) {
        /*
        const newItems = this.items.concat(product)
        return newItems
        */
        return this.items.push(product)
    }
    getItems() {
        return this.items
    }
    clearCart() {
        return (this.items = [])
    }
    getShippingPrices() {
        return this.http.get("/assets/shipping.json")
    }

    constructor(
        private http: HTTPClient
    ) {

    }

}
