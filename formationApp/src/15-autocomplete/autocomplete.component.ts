import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnDestroy, ViewChild, inject } from '@angular/core';
import { ClientService } from './client.service';
import { NEVER, Observable, Subscription, concatAll, concatMap, debounceTime, delay, distinctUntilChanged, exhaustMap, filter, first, fromEvent, iif, interval, map, merge, mergeAll, mergeMap, of, switchAll, switchMap, tap, throttle } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Client } from '../utils/client';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="content exercice">
      <h1>Composant Autocomplete</h1>

      <div class="box">
        <input #input/><button (click)="clientRequest($event)">Rechercher</button>
      </div>
      <div class="box">
        <div *ngFor="let client of clients$ | async"> 
          {{ client.firstname }}
        </div>
      </div>
    
  `,
  styles: `
  `
})
export class AutocompleteComponent {

  clientService = inject(ClientService)

  @ViewChild('input')
  inputElement!: ElementRef<HTMLInputElement>

  clients$?: Observable<Client[]>

  clientRequest(event: Event) {

  }
}
