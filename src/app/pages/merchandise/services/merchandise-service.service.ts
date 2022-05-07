import {Injectable} from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AddMerchandise, FilterMerchandise, Merchandise} from "../../interfaces/merchandise";

@Injectable({
  providedIn: 'root'
})
export class MerchandiseServiceService {

  protected endPoint = `${environment.endpoint}/merchandise`
  constructor(protected http: HttpClient) {}

  public listMerchandise(): Observable<Merchandise[]>{
    return this.http.get<Merchandise[]>(`${this.endPoint}`)
  }
  public addMerchandise(newMerchandise: AddMerchandise): Observable<Merchandise>{
    return this.http.post<Merchandise>(`${this.endPoint}`,newMerchandise)
  }

  public deleteMerchandise(idMerchandise?: number): Observable<void>{
    return this.http.delete<void>(`${this.endPoint}/${idMerchandise}`);
  }

  public editMerchandise(merchandise: Merchandise): Observable<Merchandise>{
    return this.http.put<Merchandise>(`${this.endPoint}`, merchandise);
  }

  public filterMerchandise(filter?: FilterMerchandise): Observable<Merchandise[]>{
    return this.http.post<Merchandise[]>(`${this.endPoint}/filter`, filter)
  }
}
