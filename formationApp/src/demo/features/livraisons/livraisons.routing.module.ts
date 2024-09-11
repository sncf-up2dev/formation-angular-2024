import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LivraisonsComponent } from "./livraisons.component";

const routes: Routes = [
    {
        path: '',
        title: 'Livraisons',
        component: LivraisonsComponent,
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LivraisonsRoutingModule {
}