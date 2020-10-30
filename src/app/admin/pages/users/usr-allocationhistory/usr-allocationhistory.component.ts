import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-usr-allocationhistory',
  templateUrl: './usr-allocationhistory.component.html',
  styleUrls: ['./usr-allocationhistory.component.css']
})
export class UsrAllocationhistoryComponent implements OnInit {


  rows = [];
  searchQR: any;
  value1: any;
  constructor(
    private router: Router,
    public dialog: MatDialog,
  ) { }



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
  close(){
    this.dialog.closeAll();
  }
}

