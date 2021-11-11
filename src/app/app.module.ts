import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { StudentItemComponent } from './student/pages/student-item/student-item.component';
import { StudentListComponent } from './student/pages/student-list/student-list.component';
import { StudentLayoutComponent } from './student/shared/student-layout/student-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    StudentItemComponent,
    StudentListComponent,
    StudentLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
