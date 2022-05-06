import {JobPosition} from "./job-position";

export interface Employee {
  idEmployee?: number;
  name? : string;
  age? : number;
  jobPosition? : JobPosition;
}
