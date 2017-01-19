import { Component, Input, OnInit } from '@angular/core';
import { HeroService } from './heroes.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Hero } from './hero';

@Component({
    moduleId: module.id,
    selector: 'full-unit-details',
    templateUrl: 'full-details.component.html',
    styleUrls: ['app.styles.css']
})

export class FullDetailsComponent implements OnInit {
    @Input() hero: Hero;

    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private router: Router,
        private location: Location
    ){ }

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.heroService.getHero(+params['id']))
            .subscribe(hero => this.hero = hero);
    }

    goBack(): void {
        this.location.back();
    }
}