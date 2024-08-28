import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../utils/client';

export type PostClientBody = {
  firstname: string,
  lastname: string,
  age: number
}

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  readonly CLIENT_URL = "http://localhost:3000/clients"

  private _http = inject(HttpClient)

  getFilteredSortedClients(filter: string = ""): Observable<Client[]> {
    const params = new HttpParams()
      .append("firstname_like", filter)
      .append("_sort", "firstname")

    return this._http.get<Client[]>(this.CLIENT_URL, { params: params })
  }

  postClient(client: PostClientBody): Observable<HttpResponse<Client>> {
    /* /!\ Ici, on suppose que le serveur renvoie un client avec un id de type number
      or si on utilise le json-server, il renvoie un id de type string
    */
    return this._http.post<Client>(this.CLIENT_URL, client, { observe: 'response' })
  }

}
