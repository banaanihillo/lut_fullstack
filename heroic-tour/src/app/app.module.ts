import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'
import {RouterModule} from "@angular/router"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [		
    AppComponent,
      HeroesComponent,
      DashboardComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
        {
            path: "",
            component: DashboardComponent
        },
        {
            path: "heroes",
            component: HeroesComponent
        }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
