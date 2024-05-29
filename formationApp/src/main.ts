import { bootstrapApplication } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './demo/app.module';
import { HtmldomComponent } from './02-binding/htmldom.component';
import { InterpolationTableauComponent } from './01-interpolation/interpolation-tableau.component';
import { InterpolationComponent } from './01-interpolation/interpolation.component';
import {PipeTronqueComponent} from "./06-pipes/exercices/pipe-tronque.component";

//platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.error(err));

// ou

bootstrapApplication(PipeTronqueComponent).catch(err => console.error(err));
