import {Injectable} from '@angular/core'
import {
    InMemoryDbService as FakeDatabase
} from "angular-in-memory-web-api"

@Injectable({
    providedIn: 'root'
})

export class InMemoryDataService implements FakeDatabase {
    //what's a Db? do i really have to use a method name like this
    createDb() {
        const heroes = [
            {
                name: "Mike Trout",
                number: 27,
                position: "CF",
                description: "Pretty good ballplayer",
                id: "ababbababbaba",
                heroicScore: 106
            },
            {
                name: "Ryu Hyeon Jin",
                number: 99,
                position: "P",
                description: "The best Korean ballplayer of his era",
                id: "aababa",
                heroicScore: 99
            },
            {
                name: "Ohtani Shohei",
                number: 17,
                position: "P, DH",
                description: `
                The first player to both pitch and play a position
                since the Babe
                `,
                id: "ahahshhshahsha",
                heroicScore: 66
            },
            {
                name: "Vladimir Guerrero",
                number: 27,
                position: "RF",
                description: "Hits bad pitches better than good ones",
                id: "aaaaaaaaaaaa",
                heroicScore: 87
            },
            {
                name: "Vladimir Guerrero, Jr.",
                number: 27,
                position: "3B",
                description: "Has the patience his father never did",
                id: "ababbababbababbabaaaabbbaaabb",
                heroicScore: 60
            }
        ]
        return {
            heroes
        }
    }

    constructor() {

    }

}
