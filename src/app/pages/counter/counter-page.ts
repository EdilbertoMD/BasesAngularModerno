import { Component } from "@angular/core";
import { count } from "rxjs";

@Component({
  templateUrl: './counter-page.html'
})

export class CounterPage {
  counter: number = 10;

  Incrementar(valor: number) {
    this.counter += valor; 
  }
  Decrementar(valor:number) {
    this.counter -= valor; 
  }
  Reset() {
    this.counter = 10; 
  }
}