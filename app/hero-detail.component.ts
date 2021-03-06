import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Hero } from './hero';
import 'rxjs/add/operator/switchMap';

import { HeroService } from './heroes.service';
@Component({
    moduleId: module.id,
    selector: 'my-hero-detail',
    templateUrl: 'hero-detail.component.html',
    styleUrls: ['hero-detail.component.css']

})

export class HeroDetailComponent implements OnInit {
    @Input() hero: Hero;


    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private router: Router,
        private location: Location
    ) { }

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.heroService.getHero(+params['id']))
            .subscribe(hero => this.hero = hero);
    }

    goBack(): void {
        this.location.back();
    }

    // goToDetail(): void {
    //     this.router
    //         .navigate([
    //             '/fulldetails',
    //             this.hero.id
    //         ]);
    // }

}