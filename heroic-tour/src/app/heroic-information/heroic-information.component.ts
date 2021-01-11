import {
    Component,
    OnInit
} from '@angular/core'
import {ActivatedRoute} from "@angular/router"

import {Location} from "@angular/common"
import {HeroService} from "../hero.service"
import {NotificationService} from "../notification.service"

@Component({
  selector: 'app-heroic-information',
  templateUrl: './heroic-information.component.html',
  styleUrls: ['./heroic-information.component.css']
})
export class HeroicInformationComponent implements OnInit {
    hero
    heroForm

    constructor(
        private route: ActivatedRoute,

        private location: Location,
        private notificationService: NotificationService,
        private heroService: HeroService
    ) {

    }

    onSubmit(heroDetails) {
        this.heroService.updateHero(heroDetails)
            .subscribe(() => {
                this.notificationService.showNotification(`
                    Successfully updated ${heroDetails.name}.
                `)
            })
    }

    ngOnInit() {
        this.getHero()
    }

    getHero() {
        const heroicRouteIdentificator = this.route.snapshot.paramMap
            .get("heroic-id")
        
        this.notificationService.showNotification(`
            Currently viewing ${heroicRouteIdentificator}.
        `)

        this
            .heroService
            .getHero(heroicRouteIdentificator)
                .subscribe(hero => this.hero = hero)
    }

    goBack() {
        this.location.back()
    }

}
