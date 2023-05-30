import { Component } from '@angular/core';
import { MovieToWatch } from '../models/movie-to-watch.model';
import { MovieToWatchService } from '../services/movies-to-watch.service';

@Component({
    selector: 'app-towatch-list',
    templateUrl: './towatch-list.component.html',
    styleUrls: ['./towatch-list.component.scss']
})
export class TowatchListComponent {

    movies!: MovieToWatch[];

    constructor(private movieToWatchService: MovieToWatchService) { }

    ngOnInit() {
        this.movies = this.movieToWatchService.getAllMoviesToWatch();
    }

    deleteItem(itemId: number): void {
        this.removeElementFromObjectArray(itemId);
    }

    removeElementFromObjectArray(itemId: number) {
        this.movies.forEach((value, index) => {
            if (value.id == itemId) this.movies.splice(index, 1);
        });
    }

}
