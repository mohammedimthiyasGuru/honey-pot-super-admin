import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-acc-accountlist',
  templateUrl: './acc-accountlist.component.html',
  styleUrls: ['./acc-accountlist.component.css']
})
export class AccAccountlistComponent implements OnInit {

  rows = [];
  searchQR: any;
  value1: any;
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
  client_form() {
    this.router.navigateByUrl('/admin_panel/client-form')
  }
  profile() {
    this.router.navigateByUrl('/admin_panel/Client_profile')
  }
}

