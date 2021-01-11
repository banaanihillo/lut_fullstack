import {
    Component,
    OnInit
} from '@angular/core'
import {HeroService} from "../hero.service"

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
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
                    return (this.heroes = heroes)
                })
    }

    deleteHero(heroicIdentificator) {
        this
            .heroService
            .deleteHero(heroicIdentificator)
                .subscribe(() => {
                    this.heroes = this.heroes.filter(hero => {
                        return (hero._id !== heroicIdentificator)
                    })
                })
    }

}
