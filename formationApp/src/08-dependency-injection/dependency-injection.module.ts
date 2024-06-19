import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { DependencyInjectionComponent, DependencyInjectionFatherComponent, DependencyInjectionChildComponent } from "./dependency-injection.component";

@NgModule({
    declarations: [
        DependencyInjectionComponent,
        DependencyInjectionFatherComponent,
        DependencyInjectionChildComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [

    ],
    bootstrap: [
        DependencyInjectionComponent
    ]
})
export class DependencyInjectionModule { }