import {NgModule} from '@angular/core'
import {RouterModule} from '@angular/router'
import {HeroesComponent} from "./heroes/heroes.component"
import {
    HeroicInformationComponent
} from "./heroic-information/heroic-information.component"
import {DashboardComponent} from "./dashboard/dashboard.component"

const routes = [
    {
        path: "heroes/:heroic-id",
        component: HeroicInformationComponent
    },
    {
        path: "heroes",
        component: HeroesComponent
    },
    {
        path: "",
        component: DashboardComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {

}
