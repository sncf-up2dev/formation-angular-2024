import { Injectable, inject } from '@angular/core';
import { Fruit } from '../model/fruit';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FruitService {

  private readonly SERVER_URL = 'http://localhost:3000'
  private readonly BASE_URL = this.SERVER_URL + '/fruits'

  private _httpClient = inject(HttpClient)

  getFruitList(): Observable<Fruit[]> {
    return this._httpClient.get<Fruit[]>(this.BASE_URL)
  }

}
