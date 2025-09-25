import { Component, signal } from "@angular/core";
import { count } from "rxjs";

@Component({
  templateUrl: './counter-page.html'
})

export class CounterPage {
  counter: number = 10;
  counterSignal = signal(10);
  Incrementar(valor: number) {
    this.counter += valor; 
    this.counterSignal.update(current => current + valor);
  }
  Reset() {
    this.counter = 10; 
    this.counterSignal.set(10);

  }
}