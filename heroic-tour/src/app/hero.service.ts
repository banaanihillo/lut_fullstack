import {Injectable} from '@angular/core'
import {
    HttpClient as HTTPClient
} from "@angular/common/http"
import {of as emitValuesOf} from "rxjs"
import {
    catchError/*,
    map*/,
    tap
} from "rxjs/operators"

import {heroes} from "./dummyHeroes"
import {NotificationService} from "./notification.service"

@Injectable({
    providedIn: 'root'
})

export class HeroService {
    private address = "backend/heroes"
    private handleError(operation="operation", result?) {
        return (error) => {
            console.error(`
                Error during ${operation}: ${error}
            `)
            return emitValuesOf(result)
        }
    }

    constructor(
        private httpClient: HTTPClient,
        private notificationService: NotificationService
    ) {

    }

    getHeroes() {
        return this.httpClient
            .get(this.address)
                .pipe(
                    tap(() => {
                        this.notificationService.showNotification(`
                            Hero retrieval successful.
                        `)
                    }),
                    catchError(
                        this.handleError(
                            "Hero retrieval",
                            []
                        )
                    )
                )
    }

    getHero(id) {
        return this.httpClient
            .get(`${this.address}/${id}`)
                .pipe(
                    tap(() => {
                        this.notificationService.showNotification(`
                            Successfully fetched ${id}.
                        `)
                    }),
                    catchError(
                        this.handleError(
                            `Retrieval of ${id}`,
                            []
                        )
                    )
                )
    }

}
