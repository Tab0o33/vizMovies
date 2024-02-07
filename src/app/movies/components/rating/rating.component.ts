import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-rating',
    templateUrl: './rating.component.html',
    styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {

    @Input() rating!: number;
    @Input() title!: string;
    @Input() editable: boolean = true;

    tempRating!: number;

    @Output() markChanged: EventEmitter<number> = new EventEmitter<number>();

    ngOnInit() {
        this.tempRating = this.rating;
    }

    onHover(star: number) {
        if (this.editable) {
            this.rating = star;
        }
    }

    onLeave() {
        this.rating = this.tempRating;
    }

    onclick(star: number) {
        if (this.editable) {
            this.rating = star;
            this.tempRating = star;
            this.markChanged.emit(star);
        }
    }

}