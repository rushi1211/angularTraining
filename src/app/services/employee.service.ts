import { HttpClient, HttpHeaders, JsonpClientBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private API_URL="http://localhost:8000/api/employees";

  httpOptions={
    headers : new HttpHeaders({
      'Content-Type' : 'apllication/json' 
    })
  }

  constructor(private http:HttpClient) {}  
  
  getAllemps():Observable<any>{
    return this.http.get(this.API_URL);
  }
  getEmpById(id:number):Observable<any>{
    return this.http.get(`${this.API_URL}/${id}`)
  }
  deleteEmployee(id:number):Observable<any>{
    return this.http.delete(`${this.API_URL}/${id}`)
  }
  addEmployee(data:Employee):Observable<any>{
    return this.http.post(this.API_URL, JSON.stringify(data), this.httpOptions)
  }
  updateEmployee(id:number, data:Employee):Observable<any>{
    return this.http.put(`${this.API_URL}/${id}`, JSON.stringify(data),this.httpOptions)
  }
}
