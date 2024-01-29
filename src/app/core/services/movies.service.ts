import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL } from '../../properties';
import { UserMovie } from '../models/user-movie.model';

const HTTP_OPTIONS = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};

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

    getUserMovie(movieId: number): Observable<Movie> {
        const url = `${API_URL}/authenticated/user/me/movies/${movieId}`;
        return this.http.get<Movie>(url);
    }

    patchUserMovie(movieId: number, updatedData: any): Observable<any> {
        const url = `${API_URL}/authenticated/user/me/movies/${movieId}`;
        return this.http.patch(url, updatedData, HTTP_OPTIONS);
    }

    getUserMoviesToWatch(): Observable<UserMovie[]> {
        const url = `${API_URL}/authenticated/user/me/movies?toWatch=true`;
        return this.http.get<UserMovie[]>(url);
    }

}