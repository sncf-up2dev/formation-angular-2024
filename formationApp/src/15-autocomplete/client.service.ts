import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../utils/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  readonly CLIENT_URL = "http://localhost:3000/clients"

  private _http = inject(HttpClient)

  getFilteredSortedClients(filter: string = ""): Observable<Client[]> {
    return null as any as Observable<Client[]>
  }

}
