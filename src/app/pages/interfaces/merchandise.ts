import {Employee} from "./employee";

export interface Merchandise {
  idMerchandise? : number;
  productName? : string;
  quantity? : number;
  enterDate? : Date;
  employee? : Employee;
}

export interface AddMerchandise{
  productName?: string;
  quantity?: number;
  enterDate? : Date;
  idEmployee?: number;
}

export interface FilterMerchandise{
  idEmployee?: number;
  idMerchandise?: number;
  nameEmployee?: string;
  nameMerchandise?: string;
}
