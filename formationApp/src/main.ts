import { bootstrapApplication } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './demo/app.module';
import { FolderComponent } from './07-component-communication/exercice/folder.component';

//platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.error(err));

// ou

bootstrapApplication(FolderComponent).catch(err => console.error(err));
