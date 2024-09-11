import { NgModule } from '@angular/core';
import { LivraisonsComponent } from './livraisons.component';
import { CommonModule } from '@angular/common';
import { LivraisonsRoutingModule } from './livraisons.routing.module';

@NgModule({
    declarations: [
        LivraisonsComponent
    ],
    imports: [CommonModule, LivraisonsRoutingModule],
    providers: [],
    exports: [LivraisonsComponent]
})
export class LivraisonsModule { }