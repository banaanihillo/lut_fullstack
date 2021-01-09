import {
    Component,
    OnInit
} from '@angular/core'
import {ActivatedRoute} from "@angular/router"
import {FormBuilder} from "@angular/forms"
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
        private formBuilder: FormBuilder,
        private location: Location,
        private notificationService: NotificationService,
        private heroService: HeroService
    ) {
        this.heroForm = this.formBuilder.group({
            name: "",
            id: ""
        })
    }

    onSubmit(heroDetails) {
        console.log(heroDetails)
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
