import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { MovieGalleryComponent } from './components/movie-gallery/movie-gallery.component';
import { SingleMoviePageComponent } from './components/single-movie-page/single-movie-page.component';
import { TowatchListComponent } from './components/towatch-list/towatch-list.component';

const routes: Routes = [
    { path: 'toWatchList', component: TowatchListComponent, canActivate: [AuthGuard] },
    { path: 'gallery', component: MovieGalleryComponent },
    { path: ':id', component: SingleMoviePageComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class MoviesRoutingModule { }