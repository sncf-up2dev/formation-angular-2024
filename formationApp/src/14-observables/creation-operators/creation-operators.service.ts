import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, of, from, timer } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CreationOperatorsService {

    of<T>(...args: T[]): Observable<T> {
        return new Observable((subsciber) => {
            args.forEach(
                v => subsciber.next(v)
            )
            subsciber.complete()
        })
    }

    from<T>(input: T[]): Observable<T> {
        return new Observable((subsciber) => {
            input.forEach(
                v => subsciber.next(v)
            )
            subsciber.complete()
        })
    }

    timer(due: number | Date): Observable<0> {
        const dueTime = due instanceof Date
            ? due.valueOf() - new Date().valueOf() // Convertir due (Date) en une durée en ms
            : due

        return new Observable((subsciber) => {
            const timeoutId = setTimeout(() => {
                subsciber.next(0)
                subsciber.complete()
            }, dueTime)
            return () => clearTimeout(timeoutId)
        })
    }

    interval(perdiod: number): Observable<number> {
        return new Observable((subsciber) => {
            let cpt = 0
            const intervalId = setInterval(() => {
                subsciber.next(cpt)
                cpt++
            }, perdiod)
            return () => clearInterval(intervalId)
        })
    }

}
