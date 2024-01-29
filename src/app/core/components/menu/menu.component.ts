import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

    items!: { title: string, route: string, isDisabled: boolean }[];

    ngOnInit() {
        this.items = [
            { title: 'Tous les films', route: 'movies/gallery', isDisabled: false },
            { title: 'Films à voir', route: 'movies/toWatchList', isDisabled: false },
            { title: 'Films vus', route: 'movies/watchedList', isDisabled: true },
            { title: 'Suggestion', route: 'movies/suggestion', isDisabled: true },
            { title: 'Sur quelle plateform ?', route: 'movies/platform', isDisabled: true },
        ];
    }

}
