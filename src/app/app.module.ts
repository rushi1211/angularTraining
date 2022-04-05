import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { AddempComponent } from './components/addemp/addemp.component';
import { EditempComponent } from './components/editemp/editemp.component';
import { FilterPipe } from './pipes/filter.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { DescPipe } from './pipes/desc.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    EmployeeComponent,
    AddempComponent,
    EditempComponent,
    FilterPipe,
    OrderByPipe,
    DescPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
