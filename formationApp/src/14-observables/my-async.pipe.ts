import {OnDestroy, Pipe, PipeTransform} from '@angular/core';
import {Observable, Subscription} from 'rxjs';

@Pipe({
  name: 'myAsync',
  standalone: true,
  pure: false
})
export class MyAsyncPipe<T> implements PipeTransform, OnDestroy {

  /* Quelques remarques sur le pipe async :
    - Notre pipe async est générique, du même type que les valeurs émises par l'observable
    - Le pipe accepte les valeurs nulles ou undefined en entrée, dans ce cas il renvoie null
    - Le pipe s'abonne à l'observable d'entrée. Tant que l'observable n'a pas émit, le pipe renvoie null
    - Lorsque l'observable à émit, le pipe renvoie la dernière valeur émise
    - Le pipe ne prends pas en compte la complétion où les erreurs de l'observable
  */

  private subscription: Subscription | null = null;
  private lastValue: T | null = null; // Tant que l'observable n'a pas émit, le pipe renvoie null
  private currentObservable: Observable<T> | null = null;

  transform(obs: null | undefined): null;
  transform(obs: Observable<T>): T | undefined;
  transform(obs: Observable<T> | null | undefined): T | null | undefined {
    if (obs === null || obs === undefined) {
      return null; // Le pipe accepte les valeurs nulles ou undefined en entrée, dans ce cas il renvoie null
    }

    if (obs !== this.currentObservable) {
      this.currentObservable = obs; // me permet de savoir si l'observable a changé

      this.subscription = this.currentObservable.subscribe({
        next: value => {
          this.lastValue = value; // Lorsque l'observable à émit, le pipe renvoie la dernière valeur émise
        }
      });
    }

    return this.lastValue;
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();  }
}
