import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  nombre: string = 'iroman';
  edad: number = 40;

  get capitalName():string {
    return this.nombre.toUpperCase();
  }

  descripcion() : string {
    return `${this.nombre} ${this.edad}`
  }

  changeHero(){
    this.nombre = 'superman';
  }

  changeEdad(){
    this.edad = 35;
  }

  reset() {
    this.nombre= 'iroman';
    this.edad = 40;
  }

}
