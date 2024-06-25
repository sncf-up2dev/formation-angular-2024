import { bootstrapApplication } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './demo/app.module';
import { FolderComponent } from './07-component-communication/exercice/folder.component';
import {DependencyInjectionComponent} from "./08-dependency-injection/dependency-injection.component";
import {DependencyInjectionModule} from "./08-dependency-injection/dependency-injection.module";

platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.error(err));

// ou

// bootstrapApplication(DependencyInjectionModule).catch(err => console.error(err));
