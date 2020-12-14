import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-agency-field-add',
  templateUrl: './agency-field-add.component.html',
  styleUrls: ['./agency-field-add.component.css']
})
export class AgencyFieldAddComponent implements OnInit {
  rows = [];
  searchQR: any;
  value1: any;
  Name: any;
  con_name: any;
  con_role: any;
  con_pone: any;
  cli_type: any;
  contactarray: any = [];
  address: any;
  constructor(
    private router: Router
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
  User_form() {
    this.router.navigateByUrl('/admin_panel/user/user_form')
  }
  profile() {
    this.router.navigateByUrl('/admin_panel/Client_profile')
  }
}
