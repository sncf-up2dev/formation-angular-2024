import { Injectable, InjectionToken } from '@angular/core';

export const SECOND_COUNTER_TOKEN = new InjectionToken<CounterService>('Second counter')

@Injectable({
    providedIn: 'root'
})
export class CounterService {

    value = 0

    constructor() {
        console.log("Creation of CounterService")
    }

    incrementValue() {
        this.value++
    }

}

// Service hérité

@Injectable({
    providedIn: 'root'
})
export class BetterCounterService extends CounterService {

    constructor() {
        console.log("Creation of BetterCounterService")
        super()
    }

    override incrementValue() {
        this.value += 2
    }

}

// Service minimal

export abstract class MinimalCounterService {
    abstract value: number;
}

// UseValue

export type Config = {
    url: string,
    port: number
}
export const CONFIG_TOKEN = new InjectionToken<Config>('Config')

export const DEV_CONFIG = {
    url: 'localhost',
    port: 4200
}

// UseFactory

export type Environment = "DEV" | "PROD"

export const ENVIRONMENT_TOKEN = new InjectionToken<Environment>('Environment Token')

export const LOG_TOKEN = new InjectionToken<string>('Log Token', {
    providedIn: 'root',
    factory: () => "Valeur par défaut de log"
})

export const counterFactory = (environment: Environment, log: string): CounterService => {
    console.log(log)

    switch (environment) {
        case "DEV":
            return new CounterService()
        case 'PROD':
            return new BetterCounterService()
    }
}
