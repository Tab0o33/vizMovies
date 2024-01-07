import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { StorageService } from './services/storage.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    constructor(
        private authService: AuthService,
        private storageService: StorageService
    ) { }

    ngOnInit() {
        const isSessionValid = this.storageService.getSession();
        if (isSessionValid) {
            this.authService.loginSucceeded();
        }
    }

}
