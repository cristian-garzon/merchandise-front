import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Observable} from "rxjs";
import {Employee} from "../../interfaces/employee";

@Injectable({
  providedIn: 'root'
})
export class EmpployeeService {

  protected endPoint =  `${environment.endpoint}/employee`
  constructor(protected http: HttpClient) { }

  listEmployee(): Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.endPoint}`);
  }

}
