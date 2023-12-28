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

    formEmail: String = '';
    formPassword: String = '';

    constructor(private auth: AuthService,
        private route: ActivatedRoute,
        private router: Router) { }

    ngOnInit() {
        this.route.queryParams
            .subscribe(params => {
                this.errorMsg = params['error'] === 'unauthorizedRoute' ? 'Veuillez vous identifier pour accéder à cette page' : '';
            });
    }

    onLogin() {
        this.auth.login(this.formEmail, this.formPassword).subscribe({
            next: (v) => {
                this.auth.loginSucceeded();
                this.router.navigateByUrl('');
            },
            error: (e) => {
                if (e.status === 403) { // condition non suffisante (403 && message remonté du back en ce sens)
                    this.errorMsg = "L'email ou le mot de passe sont incorrects";
                } else {
                    this.errorMsg = "Error";
                }
            }
        });
    }

}
