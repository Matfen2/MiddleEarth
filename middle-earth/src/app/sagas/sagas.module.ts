import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SagasListComponent } from './sagas-list/sagas-list.component';
import { SagasDetailsComponent } from './sagas-details/sagas-details.component';



@NgModule({
  declarations: [
    SagasListComponent,
    SagasDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SagasModule { }
