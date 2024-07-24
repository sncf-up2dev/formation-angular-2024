import { ChangeDetectorRef, OnDestroy, Pipe, PipeTransform, inject } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

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

  private _cdr = inject(ChangeDetectorRef)

  private _latestValue: T | null = null
  private _lastObs: Observable<T> | null = null
  private _subscription: Subscription | null = null

  transform(obs: null | undefined): null
  transform(obs: Observable<T>): T | null
  transform(obs: Observable<T> | null | undefined): T | null {
    if (obs == null)
      return null

    if (this._lastObs !== obs) {
      this._subscription?.unsubscribe()
      this._latestValue = null

      this._lastObs = obs
      this._subscription = obs.subscribe(
        v => {
          this._latestValue = v
          this._cdr.markForCheck()
        }
      )
    }

    return this._latestValue
  }

  ngOnDestroy(): void {
    this._subscription?.unsubscribe()
  }

}
