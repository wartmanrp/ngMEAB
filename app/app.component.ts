import { Component } from '@angular/core';

@Component ({
    selector: 'my-app',
    template: `
        <a routerLink="/"><h1>{{ title }}</h1></a>
        <nav class="nav nav-tabs">
            <li><a routerLink="/dashboard">Dashboard</a></li>
            <li><a routerLink="/heroes">Heroes</a></li>
        </nav>

        <router-outlet></router-outlet>
    `
})

export class AppComponent {
    title  = 'Middle Earth Army Builder';

}