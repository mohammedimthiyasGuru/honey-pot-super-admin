import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../../api.service';
@Component({
  selector: 'app-dashboard-main',
  templateUrl: './dashboard-main.component.html',
  styleUrls: ['./dashboard-main.component.css']
})
export class DashboardMainComponent implements OnInit {
  displayBasic: boolean;
  payment: boolean = false;
  assets: boolean = false;
  assets1: boolean = false;
  assets2: boolean = false;

  rows: any = [{ type: "Dog", name: "dog1" },
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
  searchQR: any;
  login_detail:any;
  constructor(
    private router: Router,
    private _api: ApiService,
    @Inject(SESSION_STORAGE) private storage: StorageService
  ) { }

  ngOnInit(): void {
    this.login_detail = this.getFromLocal("login_detail")
  }
  saveInLocal(key, val): void {
    this.storage.set(key, val);
  }

  getFromLocal(key): any {
    return this.storage.get(key);
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

  logout() {
    this.router.navigate(['']);
  }
  Entity_List() {
    this.router.navigate(['admin_panel/Super_admin/EntityManagement']);
  }
  Add_Entity() {
    this.router.navigate(['admin_panel/Super_admin/EntityForm']);
  }
  Client_List() {
    this.router.navigate(['admin_panel/Clients']);
  }
  Add_Client() {
    this.router.navigate(['admin_panel/client-form']);
  }
  accallocate() {
    this.router.navigate(['admin_panel/userflow/accallocate']);
  }
  accworked() {
    this.router.navigate(['admin_panel/userflow/accworked']);
  }
  accpending() {
    this.router.navigate(['admin_panel/userflow/accpending']);
  }
  accptptoken() {
    this.router.navigate(['admin_panel/userflow/accptptoken']);
  }

  creditcardlist() {
    this.router.navigate(['admin_panel/userflow/creditcardlist']);
  }
  vehicleloanlist() {
    this.router.navigate(['admin_panel/userflow/vehicleloanlist']);
  }
  personalloanlist() {
    this.router.navigate(['admin_panel/userflow/personaloanlist']);
  }
  homeloanlist() {
    this.router.navigate(['admin_panel/userflow/homeloanlist']);
  }
  subsriptionlist() {
    // this.router.navigate(['']);
  }
  organlist() {
    // this.router.navigate(['']);
  }
  clientlist() {
    this.router.navigate(['admin_panel/Clients']);
  }
  userlist() {
    // this.router.navigate(['']);
  }

  showBasicDialog() {
    this.displayBasic = true;
  }
  Adhoc() {
    this.router.navigate(['admin_panel/user/adhoc']);
  }

  pay() {
    this.payment = !this.payment;
  }

  asset() {
    this.assets = !this.assets;
  }

  asset1() {
    this.assets1 = !this.assets1;
  }

  asset2() {
    this.assets2 = !this.assets2;
  }


}
