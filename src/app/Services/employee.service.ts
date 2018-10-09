import {Injectable} from "@angular/core";
import { Http,Response } from "@angular/http";
import { Observable,pipe} from "rxjs";
import { map } from "rxjs/operators"


@Injectable()
export class EmployeeService{
    
    constructor(private http:Http){

    }
    getAll(): Observable<any>{
        return this.http.get("http://localhost:4200/assets/student.json").
        pipe(map((res:Response)=>{
            return res.json();
        }));
    }
    getById(id)
    {
        return {};
    }
    
}