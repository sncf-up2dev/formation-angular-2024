import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';

@Pipe({
  name: 'myAsync',
  standalone: true
})
export class MyAsyncPipe<T> implements PipeTransform {

  /* Quelques remarques sur le pipe async :
    - Notre pipe async est générique, du même type que les valeurs émises par l'observable
    - Le pipe accepte les valeurs nulles ou undefined en entrée, dans ce cas il renvoie null
    - Le pipe s'abonne à l'observable d'entrée. Tant que l'observable n'a pas émit, le pipe renvoie null
    - Lorsque l'observable à émit, le pipe renvoie la dernière valeur émise
    - Le pipe ne prends pas en compte la complétion où les erreurs de l'observable
  */

  transform(obs: null | undefined): null
  transform(obs: Observable<T>): T | null
  transform(obs: Observable<T> | null | undefined): T | null {
    return null;
  }

}
