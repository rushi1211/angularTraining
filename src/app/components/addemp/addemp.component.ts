import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent implements OnInit {

  id!:number;
  empname!:string;
  email!:string;
  contact!:string;
  address!:string;
  department!:string;

  constructor(private empser:EmployeeService, private router:Router) { }

  ngOnInit(): void {
  }

  addEmp(){
    let empData={empname:this.empname, email:this.email, contact:this.contact, address:this.address, department:this.department};
    console.log(empData)
    this.empser.addEmployee(empData)
    .subscribe(res=>{
      alert("employee added..!!");
      this.router.navigate(['/employee']);
        })
  }
}
