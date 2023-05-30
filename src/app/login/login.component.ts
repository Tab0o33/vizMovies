import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {

    @Input() errorMsg!: string;

    constructor(private auth: AuthService,
        private route: ActivatedRoute,
        private router: Router) { }

    ngOnInit() {
        this.route.queryParams
            .subscribe(params => {
                this.errorMsg = params['error'] === 'unauthorizedRoute' ? 'Veuillez vous identifier pour accéder à cette page' : '';
            }
            );
    }

    onLogin() {
        this.auth.login();
        this.router.navigateByUrl('');
    }

}
