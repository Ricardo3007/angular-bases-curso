import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-form-character',
  templateUrl: './form-character.component.html',
  styleUrls: ['./form-character.component.css']
})
export class FormCharacterComponent implements OnInit {

  @Output()
  onEmitCharacter: EventEmitter<Character> = new EventEmitter();

  character: Character = {
    name: '',
    power: 0
  };
  constructor() { }

  ngOnInit() {
  }

  addCharacter(){
    console.log("character ", this.character);

    if (this.character.name.length == 0) return;
    this.onEmitCharacter.emit(this.character);

    this.character = {name : '', power : 0}
    // this.character.name = '';
    // this.character.power = 0;
  }

}
