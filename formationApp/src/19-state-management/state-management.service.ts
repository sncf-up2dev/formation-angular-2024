import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class StateManagementService {

    private _state = new BehaviorSubject(0)
    state$ = this._state.asObservable()

    increment() {
        const value = this._state.getValue()
        this._state.next(value + 1)
    }

}