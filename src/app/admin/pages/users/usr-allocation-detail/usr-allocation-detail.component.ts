import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usr-allocation-detail',
  templateUrl: './usr-allocation-detail.component.html',
  styleUrls: ['./usr-allocation-detail.component.css']
})
export class UsrAllocationDetailComponent implements OnInit {

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
