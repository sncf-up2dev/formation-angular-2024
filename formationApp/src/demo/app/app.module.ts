import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { LoginComponent } from './login.component';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptorFn } from './authorization.interceptor';
import { NotFoundComponent } from './not-found.component';
import { ColisModule } from '../features/colis/colis.module';

@NgModule({
    declarations: [AppComponent, LoginComponent, NotFoundComponent],
    imports: [BrowserModule, AppRoutingModule],
    providers: [
        provideHttpClient(
            withInterceptors(
                [authInterceptorFn]
            )
        )
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }