import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../utils/article';

@Injectable({
    providedIn: 'root'
})
export class ArticlesService {

    readonly baseUrl = "http://localhost:3000/articles"

    private _http = inject(HttpClient)

    getArticles(): Observable<Article[]> {

        const params = new HttpParams()
            .append('_sort', 'id')
            .append('_order', 'desc')
            .append('public', 'true')

        return this._http.get<Article[]>(this.baseUrl, { params: params })

    }

}
