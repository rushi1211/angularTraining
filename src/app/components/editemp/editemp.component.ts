import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-editemp',
  templateUrl: './editemp.component.html',
  styleUrls: ['./editemp.component.css']
})
export class EditempComponent implements OnInit {

  id!:number;
  empname!:string;
  email!:string;
  contact!:string;
  address!:string;
  department!:string;

  constructor(private empser:EmployeeService, private router:Router, private ar:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.ar.snapshot.params['id'];
    this.empser.getEmpById(this.id)
    .subscribe(res=>{
      this.empname=res.empname;
      this.email=res.email;
      this.contact=res.contact;
      this.address=res.address;
      this.department=res.department;
    })
  }
    editEmp(){
      let empData={empname:this.empname, email:this.email, contact:this.contact, address:this.address, department:this.department};
    // console.log(empData)
    this.empser.updateEmployee(this.id, empData)
    .subscribe(res=>{
      if(res){
          alert("employee edited..!!");
          this.router.navigate(['/employee'])
      }
     })
    }

    

}