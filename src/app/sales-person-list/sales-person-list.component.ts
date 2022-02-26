import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-bootstrap-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {


  // create array of salesperson objects

  salesPersonList: SalesPerson[] = [
    new SalesPerson("Arnold","Patten", "arnold.hcl.com", 85000),
    new SalesPerson("Rob","Pern", "Rob.hcl.com", 70000),
    new SalesPerson("Aj","Pote", "aj.hcl.com", 75000),
    new SalesPerson("Chris","Peter", "chris.hcl.com", 80000) 
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
