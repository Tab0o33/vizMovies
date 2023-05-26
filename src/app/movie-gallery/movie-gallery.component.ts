import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie.model';
import { MoviesService } from '../movies.service';

@Component({
    selector: 'app-movie-gallery',
    templateUrl: './movie-gallery.component.html',
    styleUrls: ['./movie-gallery.component.scss']
})
export class MovieGalleryComponent implements OnInit {

    movies!: Movie[];

    constructor(private moviesService: MoviesService) { }

    ngOnInit() {
        this.movies = this.moviesService.getAllMovies();
    }
}
