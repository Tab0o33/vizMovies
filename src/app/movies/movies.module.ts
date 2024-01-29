import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { MovieGalleryComponent } from './components/movie-gallery/movie-gallery.component';
import { RatingComponent } from './components/rating/rating.component';
import { SingleMoviePageComponent } from './components/single-movie-page/single-movie-page.component';
import { ToggleIswatchedButtonComponent } from './components/toggle-iswatched-button/toggle-iswatched-button.component';
import { TowatchListItemComponent } from './components/towatch-list-item/towatch-list-item.component';
import { TowatchListComponent } from './components/towatch-list/towatch-list.component';
import { MoviesRoutingModule } from './movies-routing.module';

@NgModule({
    declarations: [
        MovieGalleryComponent,
        MovieCardComponent,
        SingleMoviePageComponent,
        RatingComponent,
        TowatchListComponent,
        TowatchListItemComponent,
        ToggleIswatchedButtonComponent
    ],
    imports: [
        CommonModule,
        MoviesRoutingModule
    ],
    exports: [
        MovieGalleryComponent,
        MovieCardComponent,
        SingleMoviePageComponent,
        RatingComponent,
        TowatchListComponent,
        TowatchListItemComponent,
        ToggleIswatchedButtonComponent
    ]
})
export class MoviesModule { }
