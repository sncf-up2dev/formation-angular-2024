import { Injectable } from "@angular/core";

var loggerCount = 0

@Injectable()
export class Logger {

    readonly prefix

    constructor() {
        this.prefix = 'Child ' + loggerCount + ' : '
        loggerCount++
    }

    log(input: string) {
        console.log(this.prefix + input)
    }
}