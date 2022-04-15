import { NgModule } from '@angular/core';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { FieldsetModule, } from 'primeng/fieldset';
import { MenubarModule } from 'primeng/menubar';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';



@NgModule({
  exports: [
    CardModule,
    ButtonModule,
    FieldsetModule,
    MenubarModule,
    ToolbarModule,
    TableModule
  ]
})
export class PrimeNgModule { }
