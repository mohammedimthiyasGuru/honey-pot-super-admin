import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-agent-inbox',
  templateUrl: './agent-inbox.component.html',
  styleUrls: ['./agent-inbox.component.css']
})
export class AgentInboxComponent implements OnInit {
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
  types: any = [
    { "y": "Banks" },
    { "y": "Finance companies" },
    { "y": "Real Estate" },
    { "y": "Telecom" },
    { "y": "Others" },
  ];
  type: any = [
    { "y": "Direct" },
    { "y": "Transferred" },
    { "y": "Temporary" },
  ];
  typ: any = [
    { "y": "New" },
    { "y": "updated" },
    { "y": "re-activated" },
  ];
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
  acc_list() {
    this.router.navigateByUrl('/admin_panel/Agent_acc_list')
  }
  profile() {
    this.router.navigateByUrl('/admin_panel/Client_profile')
  }
}
