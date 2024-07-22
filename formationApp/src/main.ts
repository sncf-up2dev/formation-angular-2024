import { bootstrapApplication } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './demo/app/app.module';
import { FolderComponent } from './07-component-communication/exercice/folder.component';
import {MyAsyncComponent} from "./14-observables/my-async.component";

//platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.error(err));

// ou

bootstrapApplication(MyAsyncComponent).catch(err => console.error(err));
