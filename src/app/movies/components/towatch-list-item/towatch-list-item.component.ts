import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserMovie } from '../../../core/models/user-movie.model';

@Component({
    selector: 'app-towatch-list-item',
    templateUrl: './towatch-list-item.component.html',
    styleUrls: ['./towatch-list-item.component.scss']
})
export class TowatchListItemComponent {

    @Input() movie!: UserMovie;

    @Output() deleteEvent = new EventEmitter<number>();

    onDeleteClick(): void {
        this.deleteEvent.emit(this.movie.id);
    }

}