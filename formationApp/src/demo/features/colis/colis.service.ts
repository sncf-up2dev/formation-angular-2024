import { inject, Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { Colis } from "./colis";

@Injectable({
    providedIn: 'root'
})
export class ColisService {

    readonly baseUrl = "http://localhost:3000/colis"

    private _http = inject(HttpClient)

    getColis(): Observable<Colis[]> {

        const params = new HttpParams()
            .append('_sort', 'title')

        return this._http.get<Colis[]>(this.baseUrl, { params: params })

    }

    getColisById(id: string | null): Observable<Colis> {
        return this._http.get<Colis>(this.baseUrl + "/" + id)
    }

}