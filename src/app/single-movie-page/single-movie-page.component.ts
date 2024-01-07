import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../services/movies.service';
import { Movie } from '../models/movie.model';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-single-movie-page',
    templateUrl: './single-movie-page.component.html',
    styleUrls: ['./single-movie-page.component.scss']
})
export class SingleMoviePageComponent implements OnInit, OnDestroy {

    isConnected: boolean = false;
    isConnectedSubscription!: Subscription;

    movie$!: Observable<Movie>;
    movieId!: number;

    myRating!: number;

    constructor(private moviesService: MoviesService,
        private authService: AuthService,
        private route: ActivatedRoute) { }

    ngOnInit() {
        this.movieId = +this.route.snapshot.params['id'];
        this.isConnectedSubscription = this.authService.connectedSubject$.subscribe(value => {
            this.isConnected = value;
            if (this.isConnected) {
                this.movie$ = this.moviesService.getUserMovie(this.movieId);
                this.movie$.subscribe(
                    movie => { this.myRating = movie.myRating; }
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

    ngOnDestroy() {
        if (this.isConnectedSubscription) {
            this.isConnectedSubscription.unsubscribe();
        }
    }

}
