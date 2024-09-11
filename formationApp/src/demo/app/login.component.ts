import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AuthentificationService } from './authentification.service';

@Component({
  selector: 'app-login',
  template: `
        <h3>Connexion</h3>

        <div class="box">
        @if(authentificationService.status$ | async; as authUser) {
          <div>
            {{ authUser.user.email }}
          </div>
          <div class="button-row">
            <button (click)="logout()">Déconnexion</button> 
          </div>
        } @else {
          <div>
              Email : <input value="ext.mathieu.veyrand@sncf.fr" #email  />
          </div>
          <div>
              Mot de passe : <input value="bestPassw0rd" #password />
          </div>
          <div class="button-row">
            <button (click)="login(email.value, password.value)">Connexion</button> 
          </div>
        }
        </div>
    `,
  host: {
    'class': 'content'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {

  authentificationService = inject(AuthentificationService)

  login(email: string, password: string) {
    this.authentificationService.login(email, password)
  }

  logout() {
    this.authentificationService.logout()
  }

}
