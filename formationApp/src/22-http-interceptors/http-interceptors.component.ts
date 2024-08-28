import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { PostClientBody, ClientService } from '../15-autocomplete/client.service';
import { Observable, fromEvent, debounceTime, map, distinctUntilChanged, filter, switchMap } from 'rxjs';
import { Client } from '../utils/client';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule],
    template: `
    <h1>Http Interceptors</h1>

    <div class="box">
        <input #input/>
      </div>
      <div class="box">
        <div *ngFor="let client of clients$ | async"> 
          {{ client.firstname }}
        </div>
      </div>

    <div class="box">
        Ajouter un client :
        <div>
            Firstname : <input #firstName />
        </div>
        <div>
            Lastname : <input #lastName />
        </div>
        <div>
            Age : <input type="number" #age />
        </div>
        <button (click)="post(firstName.value, lastName.value, age.value)">Post</button> 
    </div>
  `,
    styles: ``,
    host: {
        'class': 'content example'
    },
})
export class HttpInterceptorComponent {

    clientService = inject(ClientService)

    post(firstName: string, lastName: string, age: string) {
        let client: PostClientBody = {
            firstname: firstName,
            lastname: lastName,
            age: Number(age)
        }

        this.clientService.postClient(client).subscribe(
            console.log
        )
    }

    @ViewChild('input')
    inputElement!: ElementRef<HTMLInputElement>

    clients$?: Observable<Client[]>

    ngAfterViewInit(): void {
        this.clients$ = fromEvent(this.inputElement.nativeElement, 'input').pipe(
            debounceTime(300),
            map(ev => (ev.target as HTMLInputElement).value),
            distinctUntilChanged(),
            filter(input => input.length >= 2),
            switchMap(input => this.clientService.getFilteredSortedClients(input))
        )
    }

}
