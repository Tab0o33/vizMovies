import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';
import { StorageService } from '../services/storage.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    isConnected: boolean = false;
    isConnectedSubscription!: Subscription;

    constructor(
        private authService: AuthService,
        private storageService: StorageService,
        private router: Router) { }

    ngOnInit(): void {
        this.isConnectedSubscription = this.authService.connectedSubject$.subscribe(val => {
            this.isConnected = val;
        });
        this.authService.emitIsLoggedInSubject();
    }

    onLogoClick(): void {
        this.router.navigateByUrl('');
    }

    onButtonClick(): void {
        if (!this.isConnected) {
            this.router.navigateByUrl('login');
        } else {
            this.logout();
        }
    }

    private logout() {
        this.authService.logout().subscribe({
            next: (v) => {
                this.authService.setIsLoggedIn(false);
                this.router.navigateByUrl('');
                this.storageService.cleanLocalStorage();
                // msg info vert de 2s genre "vous etes déconnecté"
            },
            error: (e) => {
                console.error(e);
            }
        });
    }
}
