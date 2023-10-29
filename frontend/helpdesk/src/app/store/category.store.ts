import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {Category, Product} from "../models/Product";

@Injectable({
    providedIn: 'root'
})
export class CategoryStore {
    private state = new BehaviorSubject<Category[]>([
        {
            id: 0,
            name: ''
        }
    ]);
    state$ = this.state.asObservable();
    constructor() {}
    saveState(state: Category[]) {
        this.state.next(state);
    }
    filterStateByNames(name: string) {
        return this.state.getValue().filter(category => category.name.toLowerCase().includes(name.toLowerCase()));
    }
    get stateValue(): Category[] {
        return this.state.getValue();
    }
}