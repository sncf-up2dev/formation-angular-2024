import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { BehaviorSubject, catchError, map, of, switchMap, tap } from "rxjs";

export type User = {
    id: number
    email: string
}

export type AuthUser = {
    accessToken: string
    user: User
}

export type Authentification = AuthUser | null

@Injectable({
    providedIn: "root"
})
export class AuthentificationService {

    private readonly AUTH_URL = "http://localhost:3000"
    private readonly LOGIN_URL = this.AUTH_URL + "/login"

    private _http = inject(HttpClient)
    private _status = new BehaviorSubject<Authentification>(null)

    status$ = this._status.asObservable()

    login(email: string, password: string) {
        // Pas très important 

        this._http.post<AuthUser>(this.LOGIN_URL, {
            "email": email,
            "password": password
        }).pipe(
            catchError(
                err => of(null)
            ),
        ).subscribe({
            next: state => this._status.next(state),
        }

        )
    }

    logout() {
        this._status.next(null)
    }

    getStatus() {
        return this._status.getValue()
    }

}