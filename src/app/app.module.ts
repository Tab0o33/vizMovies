import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MovieGalleryComponent } from './movie-gallery/movie-gallery.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { SingleMoviePageComponent } from './single-movie-page/single-movie-page.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { RatingComponent } from './rating/rating.component';
import { TowatchListComponent } from './towatch-list/towatch-list.component';
import { TowatchListItemComponent } from './towatch-list-item/towatch-list-item.component';
import { LoginComponent } from './login/login.component';

@NgModule({
    declarations: [
        AppComponent,
        MovieGalleryComponent,
        MovieCardComponent,
        SingleMoviePageComponent,
        HeaderComponent,
        MenuComponent,
        RatingComponent,
        TowatchListComponent,
        TowatchListItemComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
