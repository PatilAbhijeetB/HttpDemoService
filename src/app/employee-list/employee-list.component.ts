import { Component } from "@angular/core";
import { EmployeeService } from '../Services/employee.service';
@Component({
    selector:"my-employee-list",
    templateUrl:"./employee-list.component.html"
})
export class EmployeeListComponent{
    employees : any;
    constructor(private empSer:EmployeeService){
        this.employees=empSer.getAll();
        empSer.getAll().subscribe((data)=>{
            this.employees=data;
        })
    }
}