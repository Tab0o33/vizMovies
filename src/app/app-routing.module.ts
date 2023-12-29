import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieGalleryComponent } from './movie-gallery/movie-gallery.component';
import { SingleMoviePageComponent } from './single-movie-page/single-movie-page.component';
import { TowatchListComponent } from './towatch-list/towatch-list.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
    { path: 'movie/:id', component: SingleMoviePageComponent },
    { path: 'login', component: LoginComponent },
    { path: 'toWatchList', component: TowatchListComponent, canActivate: [AuthGuard] },
    { path: 'gallery', component: MovieGalleryComponent },
    { path: '', redirectTo: '/gallery', pathMatch: 'full' },
    { path: 'not-found', component: NotFoundComponent },
    { path: '**', redirectTo: '/not-found' }

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