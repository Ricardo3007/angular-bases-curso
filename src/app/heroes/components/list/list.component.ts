import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
    nameHero : string[] = ['Superman', 'Iroman', 'Hulk', 'Spiderman'];
    nameDelete?: string;

    deleteHero():void{
      this.nameDelete = this.nameHero.pop();
      console.log(this.nameDelete);

    }
}
