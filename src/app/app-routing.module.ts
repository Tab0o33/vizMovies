import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieGalleryComponent } from './movie-gallery/movie-gallery.component';
import { SingleMoviePageComponent } from './single-movie-page/single-movie-page.component';
import { TowatchListComponent } from './towatch-list/towatch-list.component';

const routes: Routes = [
    { path: 'movie/:id', component: SingleMoviePageComponent },
    { path: 'toWatchList', component: TowatchListComponent },
    { path: '', component: MovieGalleryComponent },

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }