import { Component } from '@angular/core';

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html'
})
export class CounterComponent{

    title: string = "Contador App";
    number: number = 10;
    base: number = 5;

    acumulate(value: number){

        this.number += value;
    }
}