import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesService } from './http-articles.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Http Get</h1>
    <div class="box">
        @for(article of articles$ | async ; track article.id) {
          @if(article.public === "true") {
            <div class="box box-border">
              {{ article.title }} - {{ article.author }}
            </div>
          }
        }
    </div>
  `,
  host: {
    'class': 'content example'
  },
})
export class HttpTypeComponent {

  articlesService = inject(ArticlesService)
  articles$ = this.articlesService.getArticles()

}
