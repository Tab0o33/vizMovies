import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../services/movies.service';
import { Movie } from '../models/movie.model';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-single-movie-page',
    templateUrl: './single-movie-page.component.html',
    styleUrls: ['./single-movie-page.component.scss']
})
export class SingleMoviePageComponent implements OnInit {

    movie$!: Observable<Movie>;

    constructor(private moviesService: MoviesService,
        private route: ActivatedRoute) { }

    ngOnInit() {
        const movieId = +this.route.snapshot.params['id'];
        this.movie$ = this.moviesService.getMovieById(movieId);
    }

}
