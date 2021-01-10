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

    addHero(heroInput) {
        const heroToSubmit = {
            ...heroInput,
            //use an actual unique identifier though
            //this will do for now,
            //since it's better to let the server handle the id anyway
            id: `${Math.floor(Math.random() * 101101101)}banananana`
        }
        return this.httpClient
            .post(
                this.address,
                heroToSubmit,
                this.httpOptions
            )
                .pipe(
                    tap(() => {
                        this.notificationService.showNotification(`
                            Successfully added ${heroToSubmit.name}.
                        `)
                    }),
                    catchError(
                        this.handleError(
                            `Submission of ${heroToSubmit.name}`,
                            []
                        )
                    )
                )
    }

    deleteHero(id) {
        return this.httpClient
            .delete(
                `${this.address}/${id}`,
                this.httpOptions
            )
                .pipe(
                    tap(() => {
                        this.notificationService.showNotification(`
                            Successfully removed ${id}.
                        `)
                    }),
                    catchError(
                        this.handleError(
                            `Removal of ${id}`,
                            []
                        )
                    )
                )
    }

    searchHeroes(searchTerms) {
        if (!searchTerms) {
            return emitValuesOf([])
        } else {
            return this.httpClient
                .get(`${this.address}/?name=${searchTerms}`)
                    .pipe(
                        tap(results =>
                            (results)
                            ? this.notificationService
                                .showNotification(`
                                    Results for ${searchTerms}:
                                `)
                            : this.notificationService
                                .showNotification(`
                                    No results for ${searchTerms}.
                                `)
                        ),
                        catchError(
                            this.handleError(
                                `Searching for ${searchTerms}`,
                                []
                            )
                        )
                    )
        }
    }

}
