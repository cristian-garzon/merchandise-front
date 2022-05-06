import { Component, OnInit } from '@angular/core';
import {Merchandise} from "../../../interfaces/merchandise";
import {MerchandiseServiceService} from "../../services/merchandise-service.service";

@Component({
  selector: 'app-list-merchandise',
  templateUrl: './list-merchandise.component.html',
  styleUrls: ['./list-merchandise.component.css']
})
export class ListMerchandiseComponent implements OnInit {

  merchandises: Merchandise[] = [];
  constructor(private merchandiseService: MerchandiseServiceService) { }

  ngOnInit(): void {
    this.merchandiseService.listMerchandise().subscribe(merchandise => {
      this.merchandises = merchandise
    });
  }

}
