import { Component, inject } from '@angular/core';
import { PostClientBody, ClientService } from '../15-autocomplete/client.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  template: `
    <h1>Http Post</h1>
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
export class PostComponent {

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

}
