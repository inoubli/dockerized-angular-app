import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { LayoutModule } from './layout/layout.module';


@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule, LayoutModule],
  exports: [LayoutModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CoreModule {}
