import {Employee} from "./employee";

export interface Merchandise {
  idMerchandise? : number;
  productName? : string;
  quantity? : number;
  enterDate? : Date;
  employee? : Employee;
}
