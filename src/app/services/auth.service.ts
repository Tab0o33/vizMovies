import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private token!: string;
    private isConnected!: boolean;
    connectedSubject$ = new Subject<boolean>();

    constructor(private router: Router) { }

    login(): void {
        this.token = 'MyFakeToken';
        this.isConnected = true;
        this.emitIsConnectedSubject();
    }

    getToken(): string {
        return this.token;
    }

    logout(): void {
        this.token = '';
        this.isConnected = false;
        this.emitIsConnectedSubject();
        this.router.navigateByUrl('');
    }

    emitIsConnectedSubject(): void {
        this.connectedSubject$.next(this.isConnected);
    }
}