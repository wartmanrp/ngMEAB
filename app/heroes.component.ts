import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './heroes.service';


@Component({
  selector: 'my-heroes',
  template: `
  <h2>{{ armyName }}</h2>
  <ul class="heroes col-md-3">
    <li 
      *ngFor="let hero of heroes" 
      (click)="onSelect(hero)" 
      [class.selected]="hero ===selectedHero"
      >
      <span class="badge">{{ hero.id }} </span> {{hero.name}}
    </li>
  </ul>
  <my-hero-detail [hero]="selectedHero" class="col-md-9"></my-hero-detail>

  `,
  styleUrls: ['app/app.styles.css']
})


export class HeroesComponent implements OnInit { 
  ngOnInit(): void {
    this.getHeroes();
  }
  heroes: Hero[];

  constructor(private heroService: HeroService) {
   }

   getHeroes(): void {
     this.heroService
     .getHeroes()
     .then(heroes => this.heroes = heroes);
   }

    armyName = 'Minas Tirith';

 

  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  }
