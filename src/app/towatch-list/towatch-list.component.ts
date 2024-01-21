import { Component } from '@angular/core';
import { UserMovie } from '../models/user-movie.model';
import { MoviesService } from '../services/movies.service';
import { Observable, finalize, map, shareReplay } from 'rxjs';

@Component({
    selector: 'app-towatch-list',
    templateUrl: './towatch-list.component.html',
    styleUrls: ['./towatch-list.component.scss']
})
export class TowatchListComponent {

    movies$!: Observable<UserMovie[]>;
    loading: boolean = true;

    constructor(private moviesService: MoviesService) { }

    ngOnInit() {
        this.movies$ = this.moviesService.getUserMoviesToWatch().pipe(
            finalize(() => this.loading = false),
            shareReplay(1) // Cache the results and replay them for subsequent subscribers
        );
    }

    deleteItem(movieId: number): void {
        this.moviesService.patchUserMovie(movieId, { toWatch: false }).subscribe(
            () => {
                this.movies$ = this.movies$.pipe(
                    map(movies => movies.filter(movie => movie.id !== movieId))
                );
            }
        );
    }

}
