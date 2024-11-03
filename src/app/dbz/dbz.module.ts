import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainDbzComponent } from './pages/main-dbz/main-dbz.component';
import { ListCharacterComponent } from './components/list-character/list-character.component';
import { FormCharacterComponent } from './components/form-character/form-character.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [MainDbzComponent, ListCharacterComponent, FormCharacterComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [MainDbzComponent]
})
export class DbzModule { }
