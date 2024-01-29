import { Component, Input } from '@angular/core';
import { Movie } from '../../../core/models/movie.model';
import { Router } from '@angular/router';

@Component({
    selector: 'app-movie-card',
    templateUrl: './movie-card.component.html',
    styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {

    @Input() movie!: Movie;

    constructor(private router: Router) { }

    onViewMovie() {
        this.router.navigateByUrl(`movie/${this.movie.id}`);
    }

}
