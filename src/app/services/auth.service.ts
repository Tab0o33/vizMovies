import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { API_URL } from '../properties';

const AUTH_API = `${API_URL}/public/auth`;

const HTTP_OPTIONS = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    }),
    withCredentials: true
};

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private isLoggedIn: boolean = false;
    connectedSubject$ = new Subject<boolean>();

    constructor(
        private router: Router,
        private http: HttpClient) { }

    login(email: String, password: String): Observable<any> {
        const url = AUTH_API + '/login';
        const data = {
            email,
            password
        };
        return this.http.post<any>(url, data, HTTP_OPTIONS);
    }

    loginSucceeded() {
        this.isLoggedIn = true;
        this.emitIsLoggedInSubject();
    }

    getIsLoggedIn(): boolean {
        return this.isLoggedIn;
    }

    logout(): void {
        this.http.post<any>(AUTH_API + '/signout', 'signout', HTTP_OPTIONS).subscribe({
            next: (v) => {
                this.isLoggedIn = false;
                this.emitIsLoggedInSubject();
                this.router.navigateByUrl('');
                // msg info vert de 2s genre "vous etes déconnecté"
            },
            error: (e) => {
                console.error(e);
            }
        });
    }

    emitIsLoggedInSubject(): void {
        this.connectedSubject$.next(this.isLoggedIn);
    }
}