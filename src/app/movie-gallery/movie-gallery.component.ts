import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie.model';
import { MoviesService } from '../services/movies.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-movie-gallery',
    templateUrl: './movie-gallery.component.html',
    styleUrls: ['./movie-gallery.component.scss']
})
export class MovieGalleryComponent implements OnInit {

    movies$!: Observable<Movie[]>;

    constructor(private moviesService: MoviesService) { }

    ngOnInit() {
        this.movies$ = this.moviesService.getAllMovies();
    }
}
