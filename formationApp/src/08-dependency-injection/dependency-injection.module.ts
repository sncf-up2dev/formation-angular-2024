import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { DependencyInjectionComponent, DependencyInjectionFatherComponent, DependencyInjectionChildComponent } from "./dependency-injection.component";
import {CounterService, MinimalCounterService, SECOND_COUNTER_TOKEN} from "./dependency-injection.service";

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
        {
            provide: SECOND_COUNTER_TOKEN,
            useClass: CounterService
        },
      {
            provide: MinimalCounterService,
            useExisting: CounterService
      },
    ],
    bootstrap: [
        DependencyInjectionComponent
    ]
})
export class DependencyInjectionModule { }
