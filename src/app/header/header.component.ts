import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    isConnected!: boolean;
    isConnectedSubscription!: Subscription;

    constructor(private authService: AuthService,
        private router: Router) { }

    ngOnInit(): void {
        this.isConnected = false;
        this.isConnectedSubscription = this.authService.connectedSubject$.subscribe(val => {
            this.isConnected = val;
        });
    }

    onLogoClick(): void {
        this.router.navigateByUrl('');
    }

    onButtonClick(): void {
        if (!this.isConnected) {
            this.router.navigateByUrl('login');
        } else {
            this.isConnected = false;
            this.authService.logout();
        }
    }

}
