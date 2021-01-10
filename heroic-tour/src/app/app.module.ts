import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'
import {
    ReactiveFormsModule,
    FormsModule
} from "@angular/forms"
import {
    HttpClientModule as HTTPClientModule/*,
    HttpHeaders as HTTPHeaders*/
} from "@angular/common/http"
import {
    HttpClientInMemoryWebApiModule as FakeHTTPClient
} from "angular-in-memory-web-api"
import {InMemoryDataService} from "./in-memory-data.service"

import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component'
import {HeroesComponent} from './heroes/heroes.component'
import {DashboardComponent} from './dashboard/dashboard.component'
import {
    HeroicInformationComponent
} from './heroic-information/heroic-information.component'
import {
    NotificationComponent
} from './notification/notification.component'

@NgModule({
    declarations: [
        AppComponent,
        HeroesComponent,
        DashboardComponent,
        HeroicInformationComponent,
        NotificationComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        HTTPClientModule,
        FakeHTTPClient.forRoot(
            InMemoryDataService, {
                dataEncapsulation: false
            }
        )
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {

}
