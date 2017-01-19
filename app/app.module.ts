import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { HeroService } from './heroes.service';
import { DashboardComponent } from './dashboard.component';
import { FullDetailsComponent } from './full-details.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports:[ 
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  declarations: 
  [ 
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    FullDetailsComponent
  ],
  providers: [
    HeroService
  ],
  bootstrap: [ AppComponent ]
})


export class AppModule { }
