import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-usr-workflow',
  templateUrl: './usr-workflow.component.html',
  styleUrls: ['./usr-workflow.component.css']
})
export class UsrWorkflowComponent implements OnInit {
  table_v:boolean = false;
  types: any = [
    { "y": "Action1" },
    { "y": "Action2" },
    { "y": "Action3" },
    { "y": "Action4" },
    { "y": "Action5" },
  ];
  types1: any = [
    { "y": "Group1" },
    { "y": "Group2" },
    { "y": "Group3" },
    { "y": "Group4" },
    { "y": "Group5" },
  ];
  types2: any = [
    { "y": "Collector1" },
    { "y": "Collector2" },
    { "y": "Collector3" },
    { "y": "Collector4" },
    { "y": "Collector5" },
  ];
  types3: any = [
    { "y": "Reason1" },
    { "y": "Reason2" },
    { "y": "Reason3" },
    { "y": "Reason4" },
    { "y": "Reason5" },
  ];
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
