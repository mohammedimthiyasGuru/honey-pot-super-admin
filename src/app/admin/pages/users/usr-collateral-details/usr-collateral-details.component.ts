import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usr-collateral-details',
  templateUrl: './usr-collateral-details.component.html',
  styleUrls: ['./usr-collateral-details.component.css']
})
export class UsrCollateralDetailsComponent implements OnInit {

  rows = [];
  searchQR: any;
  value1: any;
  constructor() { }

  ngOnInit(): void { 
    this.rows = [{ type: "Dog", name: "dog1" },
  { type: "Cat", name: "cat1" },
  { type: "Cat", name: "cat1" },
  { type: "Cat", name: "cat1" },
  { type: "Cat", name: "cat1" },
  { type: "Cat", name: "cat1" },
  { type: "Cat", name: "cat1" },
  { type: "Cat", name: "cat1" },
  { type: "Cat", name: "cat1" },
  { type: "Cat", name: "cat1" },
  { type: "Cat", name: "cat1" },
  { type: "Cat", name: "cat1" }]

  }

}
