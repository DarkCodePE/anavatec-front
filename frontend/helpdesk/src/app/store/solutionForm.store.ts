import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {Solution, SolutionState} from "../models/Product";

@Injectable({
    providedIn: 'root'
})
export class SolutionFormStore {
    private state = new BehaviorSubject<SolutionState>({
        ticketId: 0,
        title: '',
        summary: '',
        file: null,
    });
    state$ = this.state.asObservable();
    constructor() {}
    saveState(state: SolutionState) {
        this.state.next(state);
    }
    saveImage(image: any){
        const state = this.stateValue;
        this.saveState({
            ...state,
            file: image,
        });
    }
    get stateValue(): SolutionState{
        return this.state.getValue();
    }
}
