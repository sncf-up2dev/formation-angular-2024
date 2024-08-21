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
  })

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
  })

  count = 0

  getNameClock = () => new Observable<string>((subscriber) => {
    let value = 0
    let name = this.count
    this.count++

    console.log("Debut de l'execution d'horloge " + name)
    subscriber.next(`Counter ${name} - value ${value}`);
    var interval = setInterval(() => {
      value++
      console.log(`setInterval de l'horloge ${name} - ${value}`)
      subscriber.next(`Counter ${name} - value ${value}`);
      if (value > 4) {
        subscriber.complete()
      }
    }, 1000);
    return () => {
      console.log("Fin de l'execution d'horloge " + name)
      clearInterval(interval)
    }
  })

  readonly person$ = new Observable<Person>((subscriber) => {
    console.log("Debut de l'execution de personne")
    subscriber.next(getRandomPerson())
    subscriber.complete()
  })

  value = 0

  getHotClock = () => new Observable<number>((subscriber) => {
    console.log("Debut de l'execution d'horloge partagée")
    subscriber.next(this.value);
    var interval = setInterval(() => {
      this.value++
      console.log("setInterval de l'horloge partagée " + this.value)
      subscriber.next(this.value);
    }, 5000);
    return () => {
      console.log("Fin de l'execution d'horloge partagée")
      clearInterval(interval)
    }
  })

  readonly error$ = new Observable<string>((subscriber) => {
    console.log("Debut de l'execution de error")
    subscriber.next("Value")
    subscriber.error("Erreur !")
  })

}
