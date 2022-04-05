import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddempComponent } from './components/addemp/addemp.component';
import { EditempComponent } from './components/editemp/editemp.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'employee',component:EmployeeComponent},
  {path:'addemp',component:AddempComponent},
  {path:'editemp/:id',component:EditempComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
