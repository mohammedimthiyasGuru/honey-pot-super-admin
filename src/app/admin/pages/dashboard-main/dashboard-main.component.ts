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
    this.router.navigate(['admin_panel']);
  }

  
  showBasicDialog() {
    this.displayBasic = true;
}
}
