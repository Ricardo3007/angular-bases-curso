import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-list-character',
  templateUrl: './list-character.component.html',
  styleUrls: ['./list-character.component.css']
})
export class ListCharacterComponent implements OnInit {

  @Input()
  characterList:Character[] = [] ;

  @Output()
  // onDeteleId: EventEmitter<number> = new EventEmitter();
  onDeteleId: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log("characterList ", this.characterList);
  }


  // OnDeleteItem(index:number):void {
  //   this.onDeteleId.emit(index);
  // }

  OnDeleteItem(id?:string):void {
    if (!id) return;
    this.onDeteleId.emit(id);
  }


}
