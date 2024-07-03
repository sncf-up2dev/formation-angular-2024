import { NgModule } from '@angular/core';
import { ColisDetailsComponent } from './components/colis-details.component';
import { ListViewComponent } from '../../shared/list-view.component';
import { ColisComponent } from './components/colis.component';

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