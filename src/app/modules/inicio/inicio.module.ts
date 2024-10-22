import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../../shared/shared.module';
import { InicioComponent } from './inicio.component';
import { INICIO } from './inicio.routes';



@NgModule({
  declarations: [
    InicioComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(INICIO),
  ],
})
export class InicioModule { }