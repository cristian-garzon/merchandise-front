import {enableProdMode, Injectable} from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Merchandise} from "../../interfaces/merchandise";

@Injectable({
  providedIn: 'root'
})
export class MerchandiseServiceService {

  protected endPoint = `${environment.endpoint}/merchandise`
  constructor(protected http: HttpClient) {}

  public listMerchandise(): Observable<Merchandise[]>{
    return this.http.get<Merchandise[]>(`${this.endPoint}`)
  }

}
