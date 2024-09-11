import { NgModule } from '@angular/core';
import { ColisDetailsComponent } from './colis-details.component';
import { ListViewComponent } from '../../shared/list-view.component';
import { ColisComponent } from './colis.component';
import { CommonModule } from '@angular/common';
import { ColisRoutingModule } from './colis.routing.module';

@NgModule({
    declarations: [
        ColisComponent,
        ColisDetailsComponent
    ],
    imports: [CommonModule, ListViewComponent, ColisRoutingModule],
    providers: [],
    exports: [ColisComponent]
})
export class ColisModule { }