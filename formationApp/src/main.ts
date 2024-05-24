import { bootstrapApplication } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './demo/app.module';
import { HtmldomComponent } from './02-binding/htmldom.component';
import { InterpolationTableauComponent } from './01-interpolation/interpolation-tableau.component';
import { InterpolationComponent } from './01-interpolation/interpolation.component';
import {DomEventComponent} from "./04-dom-events/dom-event.component";

//platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.error(err));

// ou

bootstrapApplication(DomEventComponent).catch(err => console.error(err));
