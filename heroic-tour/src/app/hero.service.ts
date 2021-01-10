import {Injectable} from '@angular/core'
import {
    HttpClient as HTTPClient,
    HttpHeaders as HTTPHeaders
} from "@angular/common/http"
import {of as emitValuesOf} from "rxjs"
import {
    catchError/*,
    map*/,
    tap
} from "rxjs/operators"
//
import {NotificationService} from "./notification.service"

@Injectable({
    providedIn: 'root'
})

export class HeroService {
    private address = "backend/heroes"
    private handleError(operation="operation", result?) {
        return (response) => {
            console.error(`
                Error during ${operation}: ${response.body.error}
            `)
            console.log(response.body)
            console.log(
                response.body.status,
                response.body.statusText
            ),
            this.notificationService.showNotification(`
                ${operation} failed: ${response.body.error}
            `)
            return emitValuesOf(result)
        }
    }

    httpOptions = {
        headers: new HTTPHeaders({
            "Content-Type": "application/json"
        })
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

    updateHero(hero) {
        return this.httpClient
            .put(
                `${this.address}/${hero.id}`,
                hero,
                this.httpOptions
            )
                .pipe(
                    tap(() => {
                        this.notificationService.showNotification(`
                            Successfully updated ${hero.name}.
                        `)
                    }),
                    catchError(
                        this.handleError(
                            `Update of ${hero.id}`,
                            []
                        )
                    )
                )
    }

}
