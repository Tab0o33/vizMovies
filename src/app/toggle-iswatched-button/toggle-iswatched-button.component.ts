import { Component, Input } from '@angular/core';
import { MoviesService } from '../services/movies.service';

@Component({
    selector: 'app-toggle-iswatched-button',
    templateUrl: './toggle-iswatched-button.component.html',
    styleUrls: ['./toggle-iswatched-button.component.scss']
})
export class ToggleIswatchedButtonComponent {

    @Input() isWatched!: boolean;
    @Input() movieId!: number;

    constructor(private moviesService: MoviesService) { }

    toggleIsWatched(): void {
        const isWatched = !this.isWatched;
        this.moviesService.patchUserMovie(this.movieId, { isWatched }).subscribe(
            () => {
                this.isWatched = isWatched;
            },
            error => {
                console.error(error);
                // msg info rouge de 2s genre "échec de la MAJ"
            }
        );
    }

}
