import { Component, OnInit } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { DbzService } from '../../services/dbz.service';

@Component({
  selector: 'app-main-dbz',
  templateUrl: './main-dbz.component.html',
  styleUrls: ['./main-dbz.component.css']
})
export class MainDbzComponent {

  constructor(private dbzService:DbzService) { }

  get character() : Character[] {
    return this.dbzService.character;
  }

  onDeteleCharacterById(id: string): void {
    this.dbzService.deteleCharacterById(id);
  }

  onEmitCharacter(character: Character): void {
    this.dbzService.addCharacter(character);
  }

}
