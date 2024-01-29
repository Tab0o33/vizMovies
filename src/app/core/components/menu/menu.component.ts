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
            { title: 'Tous les films', route: 'gallery', isDisabled: false },
            { title: 'Films à voir', route: 'toWatchList', isDisabled: false },
            { title: 'Films vus', route: 'watchedList', isDisabled: true },
            { title: 'Suggestion', route: 'suggestion', isDisabled: true },
            { title: 'Sur quelle plateform ?', route: 'platform', isDisabled: true },
        ];
    }

}
