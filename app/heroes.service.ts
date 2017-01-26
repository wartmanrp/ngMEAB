import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';
//import { HEROES } from './mock-units';

@Injectable()
export class HeroService {
    private heroesUrl = 'api/heroes'; //url to web api

    constructor(private http: Http) { }

    getHeroes(): Promise<Hero[]> {
        return this.http.get(this.heroesUrl)
                   .toPromise()
                   .then(response => response.json().data as Hero[])
                   .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); 

        return Promise.reject(error.message || error);
    }

    getHero(id: number): Promise<Hero> {
        const url = '${this.heroesUrl}/${id}';

        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Hero)
            .catch(this.handleError);
    }
}