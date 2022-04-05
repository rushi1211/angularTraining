import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  empData:Employee[] =[];

  constructor(private empser:EmployeeService) { }

  ngOnInit(): void {
    this.empser.getAllemps()
    .subscribe((data:Employee[])=>{
      console.log(data);
      this.empData=data;
    })
  }

  deleteEmp(id:any){
    if(confirm("Do you want to delete..!!")){
      this.empser.deleteEmployee(id)
      .subscribe(res=>{
        if(res){
          alert("Employee Deleted..!!")
          this.empser.getAllemps()
            .subscribe((data:Employee[])=>{
              console.log(data);
              this.empData=data;
            })
        }
      })
    }
    
  }

}
