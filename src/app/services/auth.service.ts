import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { API_URL } from '../properties';
import { StorageService } from './storage.service';

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
        private http: HttpClient,
        private storageService: StorageService
    ) { }

    login(email: String, password: String): Observable<any> {
        const url = AUTH_API + '/login';
        const data = { email, password };
        return this.http.post<any>(url, data, HTTP_OPTIONS);
    }

    loginSucceeded() {
        this.isLoggedIn = true;
        this.emitIsLoggedInSubject();
        this.storageService.setSession();
    }

    getIsLoggedIn(): boolean {
        return this.isLoggedIn;
    }

    setIsLoggedIn(value: boolean): void {
        this.isLoggedIn = value;
        this.emitIsLoggedInSubject();
    }

    logout(): Observable<any> {
        const url = AUTH_API + '/signout';
        return this.http.post<any>(url, 'signout', HTTP_OPTIONS);
    }

    emitIsLoggedInSubject(): void {
        this.connectedSubject$.next(this.isLoggedIn);
    }
}