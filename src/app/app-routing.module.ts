import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieGalleryComponent } from './movie-gallery/movie-gallery.component';
import { SingleMoviePageComponent } from './single-movie-page/single-movie-page.component';
import { TowatchListComponent } from './towatch-list/towatch-list.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
    { path: 'movie/:id', component: SingleMoviePageComponent },
    { path: 'login', component: LoginComponent },
    { path: 'toWatchList', component: TowatchListComponent, canActivate: [AuthGuard] },
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