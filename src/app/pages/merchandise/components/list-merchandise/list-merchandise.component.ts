import { Component, OnInit } from '@angular/core';
import {AddMerchandise, FilterMerchandise, Merchandise} from "../../../interfaces/merchandise";
import {MerchandiseServiceService} from "../../services/merchandise-service.service";
import {Employee} from "../../../interfaces/employee";
import {EmpployeeService} from "../../services/empployee.service";
import {ConfirmationService, Message, MessageService} from "primeng/api";

@Component({
  selector: 'app-list-merchandise',
  templateUrl: './list-merchandise.component.html',
  styleUrls: ['./list-merchandise.component.css']
})
export class ListMerchandiseComponent implements OnInit {

  edit = false;
  productDialog?: boolean;
  employeeDialog?: boolean;
  submitted?: boolean;
  today: Date = new Date();
  newMerchandise: AddMerchandise = {} as Merchandise;
  employee?: Employee;
  employees: Employee[] = [];
  merchandiseSelected?: Merchandise;
  merchandises: Merchandise[] = [];
  filter: FilterMerchandise = {};

  constructor(
    private merchandiseService: MerchandiseServiceService,
    private employeeService: EmpployeeService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {
  }

  ngOnInit(): void {
    this.clearFilter();
    this.listMerchandise();
    this.employeeService.listEmployee().subscribe(employees => {
      this.employees = employees;
    })
  }

  windowMerchandise(): void {
    this.newMerchandise = {} as AddMerchandise;
    this.submitted = false;
    this.productDialog = true;
  }

  editMerchandiseWindow(merchandise: Merchandise): void {
    this.newMerchandise = merchandise;
    this.edit = true;
    this.newMerchandise.enterDate = new Date(merchandise.enterDate + "")
    this.productDialog = true;
  }

  editMerchandise(): void {
    this.submitted = true;
    if (this.newMerchandise.productName?.trim()) {
      this.newMerchandise.idEmployee = this.employee?.idEmployee;
      this.merchandiseService.editMerchandise(this.newMerchandise).subscribe(response => {
        this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Product edited :D', life: 3000});
        this.listMerchandise();
      });
    }
    this.employee = {} as Employee;
    this.productDialog = false;
    this.submitted = false;
  }

  deleteMerchandise(merchandise?: Merchandise, idEmployee?: number): void {
    if (idEmployee != null) {
      if(idEmployee == this.merchandiseSelected?.employee?.idEmployee) {
        this.employeeDialog = false;
        this.confirmationService.confirm({
          message: 'Are you sure you want to delete ' + this.merchandiseSelected?.productName + '?',
          header: 'Confirm',
          icon: 'pi pi-exclamation-triangle',
          accept: () => {
            this.merchandiseService.deleteMerchandise(this.merchandiseSelected?.idMerchandise).subscribe(() => {
              this.listMerchandise();
            });
            this.messageService.add({
              severity: 'success',
              summary: 'Successful',
              detail: 'Product Deleted :D',
              life: 3000
            });
          }
        });
      } else {
        this.messageService.add({
          severity: 'error',
          summary: 'stop!',
          detail: 'this employee dont create this product',
          life: 3000
        });
        this.employeeDialog = false;
      }
    } else {
      this.merchandiseSelected = merchandise
      this.employeeDialog = true;
    }
  }

  listMerchandise(): void {
    this.merchandiseService.listMerchandise().subscribe(merchandise => {
      this.merchandises = merchandise
    });
  }

  addMerchandise(): void {
    this.submitted = true;
    if (this.newMerchandise.productName?.trim()) {
      this.newMerchandise.idEmployee = this.employee?.idEmployee;
      this.merchandiseService.addMerchandise(this.newMerchandise).subscribe(response => {
        this.merchandises.push(response)
      })
    }
    this.employee = {} as Employee;
    this.productDialog = false;
    this.submitted = false;
  }

  cancelWindow(): void {
    this.productDialog = false;
    this.employee = {} as Employee;
    this.submitted = false;
  }

  filterMerchandise(): void {
    this.merchandiseService.filterMerchandise(this.filter).subscribe(response => {
      this.merchandises = response
    });
  }

  clearFilter(): void {
    this.filter = {
      nameMerchandise: "",
      nameEmployee: ""
    } as FilterMerchandise
  }
  cancelWindowDelete(): void{
    this.employeeDialog = false;
    this.employee = {} as Employee;
  }
}
