import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {MegaMenuItem,MenuItem} from 'primeng/api';
@Component({
  selector: 'app-dashboard-main',
  templateUrl: './dashboard-main.component.html',
  styleUrls: ['./dashboard-main.component.css']
})
export class DashboardMainComponent implements OnInit {
  displayBasic: boolean;
  payment:boolean = false;
  assets:boolean = false;
  assets1 : boolean = false;

  rows:any = [{ type: "Dog", name: "dog1" },
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
    { type: "Cat", name: "cat1" }];
    searchQR:any;


    data:any = {
      labels: ['A','B','C'],
      datasets: [
          {
              data: [300, 50, 100],
              backgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
              ],
              hoverBackgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
              ]
          }]
      };


      data1:any = {
        labels: ['January', 'February', 'March',],
        datasets: [
            {
                label: 'My First dataset',
                backgroundColor: '#42A5F5',
                borderColor: '#1E88E5',
                data: [65, 59, 80,]
            },
            {
                label: 'My Second dataset',
                backgroundColor: '#9CCC65',
                borderColor: '#7CB342',
                data: [28, 48, 40,]
            }
        ]
    }

    data2:any= {
      labels: ['A','B','C'],
      datasets: [
          {
              data: [300, 50, 100],
              backgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
              ],
              hoverBackgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
              ]
          }]
      };

  items: MegaMenuItem[];
  constructor(private router: Router)  { }

  ngOnInit(): void {
    this.items = [
      {
          label: '', icon: 'pi pi-th-large',
          items: [
              [
                  {
                      label: 'Administrator',
                  },
                  {
                      label: 'Configurator ',
                  }
              ],
              [
                  {
                      label: 'Designer ',
                  },
                  {
                      label: 'Transaction ',
                  }
              ]
          ]
      },]
  }
  dash() {
    // if(this.name == 'salveo@gmail.com' && this.password == '123456'){
    //   this.router.navigate(['admin_panel']);
    // }
    // else{
    //   alert('Invalid Login Details')
    // }
    this.router.navigate(['admin_panel/accounts/accounts']);
  }

  logout(){
    this.router.navigate(['']);
  }

  accallocate(){
    this.router.navigate(['admin_panel/userflow/accallocate']);
  }
  accworked(){
    this.router.navigate(['admin_panel/userflow/accworked']);
  }
  accpending(){
    this.router.navigate(['admin_panel/userflow/accpending']);
  }
  accptptoken(){
    this.router.navigate(['admin_panel/userflow/accptptoken']);
  }

  creditcardlist(){
    this.router.navigate(['admin_panel/userflow/creditcardlist']);
  }
  vehicleloanlist(){
    this.router.navigate(['admin_panel/userflow/vehicleloanlist']);
  }
  personalloanlist(){
    this.router.navigate(['admin_panel/userflow/personaloanlist']);
  }
  homeloanlist(){
    this.router.navigate(['admin_panel/userflow/homeloanlist']);
  }
  subsriptionlist(){
    // this.router.navigate(['']);
  }
  organlist(){
    // this.router.navigate(['']);
  }
  clientlist(){
    this.router.navigate(['admin_panel/Clients']);
  }
  userlist(){
    // this.router.navigate(['']);
  }

  showBasicDialog() {
    this.displayBasic = true;
}
Adhoc(){
    this.router.navigate(['admin_panel/user/adhoc']);
}

pay(){
  this.payment = !this.payment;
}

asset(){
  this.assets = !this.assets;
}

asset1(){
  this.assets1 = !this.assets1;
}


}
