import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CounterService {

    value = 0

    incrementValue() {
        this.value++
    }

}