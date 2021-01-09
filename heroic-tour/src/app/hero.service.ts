import {Injectable} from '@angular/core'
import {of as emitValuesOf} from "rxjs"
import {heroes} from "./dummyHeroes"
import {NotificationService} from "./notification.service"

@Injectable({
    providedIn: 'root'
})

export class HeroService {

    constructor(
        private notificationService: NotificationService
    ) {

    }

    getHeroes() {
        this.notificationService.showNotification(`
            Fetching heroes,
            or, in case the fetch has already completed,
            information retrieval successful
        `)
        return emitValuesOf(heroes)
    }

    getHero(id) {
        this.notificationService.showNotification(`
            Fetched, or fetching, the hero ${id}.
        `)
        return emitValuesOf(
            heroes.find(hero => {
                return (hero.id === id)
            })
        )
    }

}
