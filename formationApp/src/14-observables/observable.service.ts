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
    subscriber.next(0);
    var interval = setInterval(() => {
      console.log("setInterval de l'observable")
      subscriber.next(5);
    }, 5000);
    return () => clearInterval(interval)
  });

  readonly clock$ = new Observable<number>((subscriber) => {
    let value = 0
    console.log("Debut de l'execution d'horloge")
    subscriber.next(value);
    var interval = setInterval(() => {
      value++
      console.log("setInterval de l'horloge " + value)
      subscriber.next(value);
    }, 1000);
    return () => {
      console.log("Fin de l'execution d'horloge")
      clearInterval(interval)
    }
  });

  readonly person$ = new Observable<Person>((subscriber) => {
    console.log("Debut de l'execution de personne")
    subscriber.next(getRandomPerson())
    subscriber.complete()
  })

}
