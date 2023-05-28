import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';

@Injectable({
    providedIn: 'root'
})
export class MoviesService {

    movies: Movie[] = [
        { id: 1, title: 'Spider-Man: Homecoming', imageUrl: 'assets/img/affiches_movies/Spider-Man_Homecoming.jpg' },
        { id: 2, title: 'Wonder Woman', imageUrl: 'assets/img/affiches_movies/WonderWoman.jpg' },
        { id: 3, title: 'Time Out', imageUrl: 'assets/img/affiches_movies/TimeOut.jpg' },
        { id: 4, title: 'I, Robot', imageUrl: 'assets/img/affiches_movies/IRobot.jpg' },
        { id: 5, title: 'Avatar', imageUrl: 'assets/img/affiches_movies/Avatar.jpg' },
        { id: 6, title: 'Interstellar', imageUrl: 'assets/img/affiches_movies/Interstellar.jpg' },
        { id: 7, title: 'Le prénom', imageUrl: 'assets/img/affiches_movies/LePrenom.jpg' },
        { id: 8, title: 'Don\'t Look Up : Déni cosmique', imageUrl: 'assets/img/affiches_movies/DontLookUp.jpg' },
        { id: 9, title: 'Borat', imageUrl: 'assets/img/affiches_movies/Borat.jpg' },
        { id: 10, title: 'Kung Fu Panda', imageUrl: 'assets/img/affiches_movies/KungFuPanda.jpg' },
        { id: 11, title: 'Paul', imageUrl: 'assets/img/affiches_movies/Paul.jpg' },
        { id: 12, title: 'Date limite', imageUrl: 'assets/img/affiches_movies/DateLimite.jpg' }
    ];

    getAllMovies(): Movie[] {
        return this.movies;
    }

    getMovieById(movieId: number): Movie {
        const movie: Movie | undefined = this.movies.find(movie => movie.id === movieId);
        if (movie) {
            return movie;
        } else {
            throw new Error('FaceSnap not found!');
        }
    }

}