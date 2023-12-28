import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../properties';

@Injectable({
    providedIn: 'root'
})
export class MoviesService {

    constructor(private http: HttpClient) { }

    getAllMovies(): Observable<Movie[]> {
        return this.http.get<Movie[]>(`${API_URL}/public/movies`);
    }

    getMovieById(movieId: number): Observable<Movie> {
        return this.http.get<Movie>(`${API_URL}/public/movie/${movieId}`);
    }

}