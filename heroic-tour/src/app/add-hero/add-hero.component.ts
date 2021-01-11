import {
    Component,
    OnInit
} from '@angular/core'
import {Router} from "@angular/router"
import {HeroService} from "../hero.service"

@Component({
    selector: 'app-add-hero',
    templateUrl: './add-hero.component.html',
    styleUrls: ['./add-hero.component.css']
})

export class AddHeroComponent implements OnInit {
    heroes

    constructor(
        private heroService: HeroService,
        private router: Router
    ) {

    }
    
    ngOnInit() {
        this.getHeroes()
    }

    getHeroes() {
        this.heroService.getHeroes()
            .subscribe(heroes => this.heroes = heroes)
    }

    addHero(heroicInput) {
        
        this.heroService.addHero(heroicInput)
            .subscribe(addedHero => {
                this.heroes.push(addedHero)
                this.router.navigate(["/heroes"])
            })
    }

}
