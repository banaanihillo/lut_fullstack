import {
    Component,
    OnInit
} from '@angular/core'
import {ActivatedRoute} from "@angular/router"
import {FormBuilder} from "@angular/forms"
import {heroes} from "../dummyHeroes"
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
        private notificationService: NotificationService
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
        const heroicRouteIdentificator = this.route.snapshot.paramMap
            .get("heroic-id")
        
        this.notificationService.showNotification(`
            Currently viewing ${heroicRouteIdentificator}.
        `)
        
        this.hero = heroes.find(hero => {
            return (hero.id === heroicRouteIdentificator)
        })
    }

}
