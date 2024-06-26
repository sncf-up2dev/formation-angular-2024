import { NgModule } from '@angular/core';
import { ColisDetailsComponent } from './colis-details.component';
import { ListViewComponent } from '../../shared/list-view.component';
import { ColisComponent } from './colis.component';

@NgModule({
    declarations: [
        ColisComponent,
        ColisDetailsComponent
    ],
    imports: [ListViewComponent],
    providers: [],
    exports: [ColisComponent]
})
export class ColisModule { }