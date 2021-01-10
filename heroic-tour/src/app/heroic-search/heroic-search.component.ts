import {
    Component,
    OnInit
} from '@angular/core'
import {Subject} from "rxjs"
import {
    debounceTime,
    distinctUntilChanged,
    switchMap
} from "rxjs/operators"
import {HeroService} from "../hero.service"

@Component({
    selector: 'app-heroic-search',
    templateUrl: './heroic-search.component.html',
    styleUrls: ['./heroic-search.component.css']
})

export class HeroicSearchComponent implements OnInit {
    heroes$
    private searchTerms = new Subject()

    constructor(
        private heroService: HeroService
    ) {

    }

    ngOnInit() {
        this.heroes$ = this.searchTerms.pipe(
            debounceTime(300),
            distinctUntilChanged(),
            switchMap((searchInput) => {
                return this.heroService.searchHeroes(searchInput)
            })
        )        
    }

    searchHeroes(searchInput) {
        this.searchTerms.next(searchInput)
    }

}
