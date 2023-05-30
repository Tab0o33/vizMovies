import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MovieToWatch } from '../models/movie-to-watch.model';

@Component({
    selector: 'app-towatch-list-item',
    templateUrl: './towatch-list-item.component.html',
    styleUrls: ['./towatch-list-item.component.scss']
})
export class TowatchListItemComponent {

    @Input() movie!: MovieToWatch;

    @Output() deleteEvent = new EventEmitter<number>();

    onEyeClick(): void {
        this.movie.isWatched = !this.movie.isWatched;
    }

    onDeleteClick(): void {
        this.deleteEvent.emit(this.movie.id);
    }

}