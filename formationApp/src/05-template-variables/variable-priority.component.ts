import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type Topic = {
  title: string;
  description: string;
}

@Component({
  standalone: true,
  imports: [CommonModule],

  selector: 'app-root',
  template: `
    <div class="content exercice">
      <h1>Variable priority</h1>

      <div class="box">
        <div *ngFor="let topic of topics"> 
            {{ topic.description }}
        </div>
      </div>

      <div class="box">
          <div>{{ topic.value }}</div>
      </div>
      
      <div class="box">
        <input value="Input 2"/>
        <input #topic value="Input 3"/>
      </div>
    </div>
  `,
})
export class VariablePriorityComponent {

  readonly topics: Topic[] = [
    { title: 'New Component', description: 'ng generate component xyz' },
    { title: 'Angular Material', description: 'ng add @angular/material' },
    { title: 'Add PWA Support', description: 'ng add @angular/pwa' },
    { title: 'Add Dependency', description: 'ng add _____' },
    { title: 'Run and Watch Tests', description: 'ng test' },
    { title: 'Build for Production', description: 'ng build' },
  ]

  topic: Topic = { title: 'Topic seul', description: 'Ce topic est séparé des autres' }

}