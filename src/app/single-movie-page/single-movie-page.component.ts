import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../services/movies.service';
import { Observable, Subscription, shareReplay } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { UserMovie } from '../models/user-movie.model';

@Component({
    selector: 'app-single-movie-page',
    templateUrl: './single-movie-page.component.html',
    styleUrls: ['./single-movie-page.component.scss']
})
export class SingleMoviePageComponent implements OnInit, OnDestroy {

    isConnected: boolean = false;
    isConnectedSubscription!: Subscription;

    movie$!: Observable<any>;
    movieId!: number;

    myRating!: number;
    toWatch: boolean = false;

    constructor(private moviesService: MoviesService,
        private authService: AuthService,
        private route: ActivatedRoute) { }

    ngOnInit() {
        this.movieId = +this.route.snapshot.params['id'];
        this.isConnectedSubscription = this.authService.connectedSubject$.subscribe(value => {
            this.isConnected = value;
            if (this.isConnected) {
                this.movie$ = this.moviesService.getUserMovie(this.movieId).pipe(
                    shareReplay(1) // Cache the results and replay them for subsequent subscribers
                );
                this.movie$.subscribe(
                    (movie: UserMovie) => {
                        this.myRating = movie.myRating;
                        this.toWatch = movie.toWatch;
                    }
                );
            } else {
                this.movie$ = this.moviesService.getMovieById(this.movieId);
            }
        });
        this.authService.emitIsLoggedInSubject();
    }

    handleMarkChanged(rating: number) {
        this.moviesService.patchUserMovie(this.movieId, { rating }).subscribe(
            () => {
                this.myRating = rating;
            },
            error => {
                console.error(error);
            }
        );
    }

    toggleToWatch(): void {
        const newToWatch = !this.toWatch;
        console.log(newToWatch);
        this.moviesService.patchUserMovie(this.movieId, { toWatch: newToWatch }).subscribe(
            () => {
                this.toWatch = newToWatch;
            },
            error => {
                console.error(error);
                // msg info rouge de 2s genre "échec de la MAJ"
            }
        );
    }

    ngOnDestroy() {
        if (this.isConnectedSubscription) {
            this.isConnectedSubscription.unsubscribe();
        }
    }

}
