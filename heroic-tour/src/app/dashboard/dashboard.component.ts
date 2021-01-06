import {
    Component,
    OnInit
} from '@angular/core'
import {heroes} from "../dummyHeroes"

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    heroes = heroes

    constructor() { }

    ngOnInit() {
        heroes.sort((hero1, hero2) => {
            return (hero2.heroicScore - hero1.heroicScore)
        })
    }

}
