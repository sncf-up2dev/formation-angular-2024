import { Injectable } from '@angular/core';
import { from, of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Person, getRandomPerson } from '../utils/persons';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {

  readonly observable = new Observable<number>((subscriber) => {
    console.log("Debut de l'execution de l'observable")
    setTimeout(() => {
      subscriber.next(1);
    }, 2000);
    var interval = setInterval(() => {
      console.log("setInterval de l'observable")
      subscriber.next(5);
    }, 5000);
    return () => clearInterval(interval)
  });

  readonly personObservable = new Observable<Person>((subscriber) => {
    subscriber.next(getRandomPerson())
    subscriber.complete()
  })

}
