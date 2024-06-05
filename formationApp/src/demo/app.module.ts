import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ColisDetailsComponent } from './colis-details.component';
import { ColisListComponent } from './colis-list.component';

@NgModule({
    declarations: [AppComponent, ColisDetailsComponent, ColisListComponent],
    imports: [BrowserModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }