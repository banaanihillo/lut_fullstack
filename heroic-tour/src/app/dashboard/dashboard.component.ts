import {
    Component,
    OnInit
} from '@angular/core'
import {HeroService} from "../hero.service"

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
    heroes

    constructor(
        private heroService: HeroService
    ) {

    }

    ngOnInit() {
        this.getHeroes()
    }

    getHeroes() {
        this
            .heroService
            .getHeroes()
                .subscribe(heroes => {
                    this.heroes = heroes
                    this.heroes.sort((hero1, hero2) => {
                        return (hero2.heroicScore - hero1.heroicScore)
                    })
                    return (this.heroes = this.heroes.slice(0, 4))
                })
    }

}
