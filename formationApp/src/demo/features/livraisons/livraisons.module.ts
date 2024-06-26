import { NgModule } from '@angular/core';
import { LivraisonsComponent } from './livraisons.component';
import { ListViewComponent } from '../../shared/list-view.component';

@NgModule({
    declarations: [
        LivraisonsComponent
    ],
    imports: [],
    providers: [],
    exports: [LivraisonsComponent]
})
export class LivraisonsModule { }