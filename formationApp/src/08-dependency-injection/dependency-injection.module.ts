import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { DependencyInjectionComponent, DependencyInjectionFatherComponent, DependencyInjectionChildComponent } from "./dependency-injection.component";
import { SECOND_COUNTER_TOKEN, CounterService, BetterCounterService } from "./dependency-injection.service";

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