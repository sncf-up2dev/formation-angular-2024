import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CreationOperatorsService {

    of<T>(...args: T[]): Observable<T> {
        return new Observable(
            /* ... */
        )
    }

    from<T>(input: T): Observable<T> {
        return new Observable(
            /* ... */
        )
    }

    timer(due: number | Date): Observable<0> {
        return new Observable(
            /* ... */
        )
    }

    interval(perdiod: number): Observable<number> {
        return new Observable(
            /* ... */
        )
    }

}
