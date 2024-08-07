import { Injectable } from '@angular/core';
import { Employee } from './model/Employee';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url :string;
  employeeArr : Employee[];
  employee : Employee;
  flag : boolean;

  constructor(private http: HttpClient) { 
    this.url = "http://localhost:3004/employees";
    this.employee = new Employee();
    this.employeeArr = [];
    this.flag = false;
  }

  insertEmployee(employee : Employee) {
    // alert(employee.id);
    this.http.post<Employee>(this.url,employee).subscribe();
    return "Employee Details Added";
  }

  updateEmployee(employee : Employee) {
    this.http.put<Employee>(this.url+"/"+employee.id,employee).subscribe();
    return "Employee Details Updated";
  }

  deleteEmployee(employee : Employee) {
    this.http.delete<Employee>(this.url+"/"+employee.id).subscribe();
    return "Employee Details Deleted";
  }

  findEmployee(employee : Employee) {
    this.http.post<Employee>(this.url+"/"+employee.id,employee).subscribe();
    return this.employee;
  }
   
  findAllEmployee(){
    this.http.get<Employee[]>(this.url).subscribe(data => this.employeeArr = data);
    return this.employeeArr;
  }
  
}
