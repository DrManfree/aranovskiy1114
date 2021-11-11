import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StudentItemComponent } from '../pages/student-item/student-item.component';
import { StudentListComponent } from '../pages/student-list/student-list.component';
import { StudentLayoutComponent } from '../shared/student-layout/student-layout.component';


@NgModule({
  declarations: [
    StudentListComponent,
    StudentItemComponent,
    StudentLayoutComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class StudentModule { }
