import { bootstrapApplication } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './demo/app.module';
import { StyleClassObjectComponent } from './02-binding/style-class-object.component';
import { StyleClassBindingComponent } from './02-binding/style-class-binding.component';
import { HtmldomComponent } from './02-binding/htmldom.component';
import { InterpolationTableauComponent } from './01-interpolation/interpolation-tableau.component';
import { InterpolationComponent } from './01-interpolation/interpolation.component';
import { StructuralDirectivesComponent } from './03-structural-directives/structural-directives/structural-directives.component';

//platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.error(err));

// ou

bootstrapApplication(StructuralDirectivesComponent).catch(err => console.error(err));