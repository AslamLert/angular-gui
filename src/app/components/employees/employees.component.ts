import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/employee';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees:any;
  employee = new Employee();

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.getEmployeeData();
  }

  getEmployeeData(){
    //console.log('Hello Employees');
    this.dataService.getData().subscribe(res => {
      //console.log(res);
      this.employees = res;
    });
  }

  insertData(){
    //console.log('Hello')
    console.log(this.employee);
  }

}
