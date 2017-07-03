import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { RegistrationformComponent } from './comp/registrationform/registrationform.component';
import { StudentlistComponent } from './comp/studentlist/studentlist.component';
import { StudentgridComponent } from './comp/studentgrid/studentgrid.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationformComponent,
    StudentlistComponent,
    StudentgridComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([{path:'registration',component:RegistrationformComponent},{path:'student-grid',component:StudentgridComponent},{path:'student-list',component:StudentlistComponent}],{useHash:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
