import { inject, NgModule } from "@angular/core";
import { Routes, RouterModule, CanActivateFn, Router } from "@angular/router";
import { LoginComponent } from "./login.component";
import { AuthentificationService } from "./authentification.service";

const authGuardFn: CanActivateFn = (route, state) => {
    const authentificationService = inject(AuthentificationService)
    const router = inject(Router)

    return authentificationService.getStatus() === null
        ? router.parseUrl("/connexion")
        : true
}

const routes: Routes = [
    {
        path: 'colis',
        title: 'Colis',
        loadChildren: () => import('../features/colis/colis.module').then(m => m.ColisModule)
    },
    {
        path: 'livraisons',
        title: 'Livraisons',
        loadChildren: () => import('../features/livraisons/livraisons.module').then(m => m.LivraisonsModule),
        canActivate: [authGuardFn]
    },
    {
        path: 'connexion',
        title: 'Connexion',
        component: LoginComponent,
    },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}