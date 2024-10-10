import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Contador : {{contador}}</h3>

    <button (click)="afectar(1)">Sumar</button>
    <button (click)="restaurar()">Restaurar</button>
    <button (click)="afectar(-1)">Rectar</button>
    <!-- <hr> -->
  `
})

export class CounterComponent implements OnInit {
  constructor() { }
  ngOnInit() { }

  contador: number = 10;

  afectar(numero:number){
    this.contador += numero;
  }

  restaurar(){
    this.contador = 10;
  }

}
