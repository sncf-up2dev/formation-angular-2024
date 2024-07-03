import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './components/app.component';
import { ColisModule } from '../features/colis/colis.module';
import { LivraisonsModule } from '../features/livraisons/livraisons.module';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, ColisModule, LivraisonsModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }