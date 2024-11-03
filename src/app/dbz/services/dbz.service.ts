import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';


@Injectable({
  providedIn: 'root'
})
export class DbzService {


  character: Character[] = [
    {
      id: uuid(),
      name: 'Goku',
      power: 10000
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 9000
    },
    {
      id: uuid(),
      name: 'Gohan',
      power: 6500
    }
  ];

  addCharacter(character:Character){
    let characterNew:Character = {id:uuid(), ...character} // spread operator - operador de propagacion
    this.character.push(characterNew);
  }

  // onDeteleCharacter(index:number){
  //   this.character.splice(index, 1);
  // }

  deteleCharacterById(id:string){
    this.character = this.character.filter(x => x.id != id);
  }


}
