import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EmployeeListComponent } from '../app/employee-list/employee-list.component';

import { FormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import { EmployeeService } from './Services/employee.service';
import { HttpModule } from "@angular/http";

@NgModule({
  declarations: [EmployeeListComponent,
    AppComponent
  ],
  imports: [
    BrowserModule, FormsModule , HttpModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
