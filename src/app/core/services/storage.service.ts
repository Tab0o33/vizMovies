import { Injectable } from '@angular/core';

const USER_KEY = 'auth-user';

@Injectable({
    providedIn: 'root'
})
export class StorageService {

    constructor() { }

    public getSession(): any {
        const isSessionValid = window.localStorage.getItem(USER_KEY);
        return !!isSessionValid;
    }

    public setSession(): void {
        window.localStorage.removeItem(USER_KEY);
        window.localStorage.setItem(USER_KEY, 'true');
    }

    cleanLocalStorage(): void {
        window.localStorage.clear();
    }
}
