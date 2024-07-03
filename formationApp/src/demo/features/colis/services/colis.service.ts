import { Injectable } from "@angular/core";
import { colisList } from "../../../../utils/colis";

@Injectable({
    providedIn: 'root'
})
export class ColisService {

    colisList = colisList

}