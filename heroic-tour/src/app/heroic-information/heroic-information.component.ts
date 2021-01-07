import {
    Component,
    OnInit
} from '@angular/core'
import {ActivatedRoute} from "@angular/router"
import {FormBuilder} from "@angular/forms"
import {heroes} from "../dummyHeroes"

@Component({
  selector: 'app-heroic-information',
  templateUrl: './heroic-information.component.html',
  styleUrls: ['./heroic-information.component.scss']
})
export class HeroicInformationComponent implements OnInit {
    hero
    heroForm

    constructor(
        private route: ActivatedRoute,
        private formBuilder: FormBuilder
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
        this.hero = heroes.find(hero => {
            return (hero.id === heroicRouteIdentificator)
        })
    }

}
