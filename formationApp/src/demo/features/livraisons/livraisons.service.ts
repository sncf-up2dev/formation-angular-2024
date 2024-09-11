import { inject, Injectable } from '@angular/core';
import { Livraison } from './livraison';
import { HttpClient, HttpContext, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AUTHORISATION_CONTEXT_TOKEN } from '../../app/authorization.interceptor';

@Injectable({
  providedIn: 'root'
})
export class LivraisonsService {

  readonly baseUrl = "http://localhost:3000/livraisons"

  private _http = inject(HttpClient)

  getLivraisons(): Observable<Livraison[]> {

    const context = new HttpContext().set(AUTHORISATION_CONTEXT_TOKEN, true)

    return this._http.get<Livraison[]>(this.baseUrl, {
      context: context
    })

  }
}
