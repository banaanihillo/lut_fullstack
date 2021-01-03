import {
    Component,
    OnInit
} from '@angular/core'
import {ActivatedRoute} from "@angular/router"
import {products} from "../products"
import {ShoppingCartService} from "../shopping-cart.service"

@Component({
    selector: 'app-product-information',
    templateUrl: './product-information.component.html',
    styleUrls: ['./product-information.component.css']
})

export class ProductInformationComponent implements OnInit {

    product
    //nothing else? what a weird syntax

    constructor(
        private route: ActivatedRoute,
        private shoppingCartService: ShoppingCartService
        //capitalized? or not? is that the same thing or
    ) {
        //and this is empty too? alright
    }

    //and this intentionally has the same name as the service method?
    addToCart(product) {
        this.shoppingCartService.addToCart(product)
        console.log(`Added ${product.name} into the cart.`)
    }

    ngOnInit() {
        const productRouteIdentificator = this.route.snapshot.paramMap
            .get("productid")
        this.product = products.find(product => {
            return (product.id === productRouteIdentificator)
        })
    }

}
