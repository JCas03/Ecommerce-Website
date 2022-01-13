import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  //Create array of objects
  salesPersonList: SalesPerson[] = [
    new SalesPerson("Anup", "Kumar", "anup.kumar@gmail.com", 200000),
    new SalesPerson("John", "Doe", "J.Doe@gmail.com", 600000),
    new SalesPerson("Claire", "Murphy", "C.Murphy@gmail.com", 600000),
    new SalesPerson("Mai", "Truong", "M.Truong@gmail.com", 900000)
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
