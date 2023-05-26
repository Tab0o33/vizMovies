import { Injectable } from '@angular/core';
import { Movie } from './models/movie.model';

@Injectable({
    providedIn: 'root'
})
export class MoviesService {

    movies: Movie[] = [
        { id: 1, title: 'Spider-Man: Homecoming', imageUrl: 'https://fr.web.img3.acsta.net/pictures/17/05/24/15/35/100661.jpg' },
        { id: 2, title: 'Wonder Woman', imageUrl: 'https://fr.web.img2.acsta.net/pictures/17/05/09/17/15/350974.jpg' },
        { id: 3, title: 'Time Out', imageUrl: 'https://fr.web.img4.acsta.net/medias/nmedia/18/85/59/68/19816803.jpg' },
        { id: 4, title: 'I, Robot', imageUrl: 'https://fr.web.img6.acsta.net/medias/nmedia/18/35/23/49/18381860.jpg' },
        { id: 5, title: 'Avatar', imageUrl: 'https://fr.web.img4.acsta.net/pictures/22/11/02/14/49/4565071.jpg' },
        { id: 6, title: 'Interstellar', imageUrl: 'https://antreducinema.fr/wp-content/uploads/2020/04/INTERSTELLAR.jpg' },
        { id: 7, title: 'Le prénom', imageUrl: 'https://fr.web.img5.acsta.net/medias/nmedia/18/86/88/02/20057116.jpg' },
        { id: 8, title: 'Don\'t Look Up : Déni cosmique', imageUrl: 'https://fr.web.img3.acsta.net/pictures/21/11/16/17/11/5656957.jpg' },
        { id: 9, title: 'Borat', imageUrl: 'https://fr.web.img6.acsta.net/medias/nmedia/18/36/29/57/18682308.jpg' },
        { id: 10, title: 'Kung Fu Panda', imageUrl: 'https://fr.web.img4.acsta.net/medias/nmedia/18/36/20/29/18944269.jpg' },
        { id: 11, title: 'Paul', imageUrl: 'https://www.ecranlarge.com/media/cache/1600x1200/uploads/image/001/297/6qxs86l3vfdyplxxvml5rnzymm2-341.jpg' },
        { id: 12, title: 'Date limite', imageUrl: 'https://fr.web.img3.acsta.net/medias/nmedia/18/79/16/65/19539681.jpg' }
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