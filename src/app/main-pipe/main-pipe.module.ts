import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Importacion del pipe pipes: filter.pipes.ts

import { FilterPipe } from '../pipes/filter.pipe';

//Exportamos el pipe para que pueda ser leido por el app en general


@NgModule({
  declarations: [FilterPipe],
  imports: [CommonModule],
  exports: [FilterPipe]
})
export class MainPipeModule { }
