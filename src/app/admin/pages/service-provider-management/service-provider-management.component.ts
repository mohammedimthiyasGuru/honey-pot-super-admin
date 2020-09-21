import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-service-provider-management',
  templateUrl: './service-provider-management.component.html',
  styleUrls: ['./service-provider-management.component.css']
})
export class ServiceProviderManagementComponent implements OnInit {
  rows = [];
  searchQR:any;
  value1:any;
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
service_form() {
    this.router.navigateByUrl('/admin_panel/Service_Provider_form')
  }
}
