import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'
import {RouterModule} from "@angular/router"
import {
    ReactiveFormsModule,
    FormsModule
} from "@angular/forms"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {
    HeroicInformationComponent
} from './heroic-information/heroic-information.component';
import { NotificationComponent } from './notification/notification.component';

@NgModule({
  declarations: [					
    AppComponent,
      HeroesComponent,
      DashboardComponent,
      HeroicInformationComponent,
      NotificationComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
        {
            path: "",
            component: DashboardComponent
        },
        {
            path: "heroes/:heroic-id",
            component: HeroicInformationComponent
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
