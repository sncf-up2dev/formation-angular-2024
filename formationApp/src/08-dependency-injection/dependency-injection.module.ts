import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { DependencyInjectionComponent, DependencyInjectionFatherComponent, DependencyInjectionChildComponent } from "./dependency-injection.component";
import { CounterService } from "./dependency-injection.service";

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
        CounterService
    ],
    bootstrap: [
        DependencyInjectionComponent
    ]
})
export class DependencyInjectionModule { }