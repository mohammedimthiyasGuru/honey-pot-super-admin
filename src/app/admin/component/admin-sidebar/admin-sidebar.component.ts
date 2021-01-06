import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
// import { ApiService } from '../../../api/userApi/api.service';
import { ApiService } from '../../../api.service';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { BookType } from 'xlsx/types';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.css']
})
export class AdminSidebarComponent implements OnInit {
  expanded: boolean = true;
  expand: boolean = true;
  expand1: boolean = true;
  expand2: boolean = true;
  expand3: boolean = true;
  expand4: boolean = true;
  expand5: boolean = true;
  expand6: boolean = true;
  expand7: boolean = true;
  expand8: boolean = true;
  menu_slider: boolean = true;
  login_type:any;
  constructor(
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private router: Router,
    private _api: ApiService,
  ) { }

  ngOnInit(): void {
   this.login_type = this.getFromLocal("login_type");
   console.log(this.login_type)
  }
  formtype() {
    this.saveInLocal('Company_detail', undefined);
    this.saveInLocal('Form_type', 'create');
  }


  saveInLocal(key, val): void {
    this.storage.set(key, val);
  }

  getFromLocal(key): any {
    return this.storage.get(key);
  }
  menuslide() {
    this.menu_slider = !this.menu_slider;
  }
  act() {
    this.expand1 = true;
    this.expand2 = true;
    this.expand3 = true;
    this.expand4 = true;
    this.expand5 = true;
    this.expand6 = true;
    this.expand7 = true;
    this.expand8 = true;
  }
  act1() {
    this.expand1 = false;
    this.expand2 = true;
    this.expand3 = true;
    this.expand4 = true;
    this.expand5 = true;
    this.expand6 = true;
    this.expand7 = true;
    this.expand8 = true;
  }
  act2() {
    this.expand2 = false;
    this.expand1 = true;
    this.expand3 = true;
    this.expand4 = true;
    this.expand5 = true;
    this.expand6 = true;
    this.expand7 = true;
    this.expand8 = true;
  }
  act3() {
    this.expand3 = false;
    this.expand2 = true;
    this.expand1 = true;
    this.expand4 = true;
    this.expand5 = true;
    this.expand6 = true;
    this.expand7 = true;
    this.expand8 = true;
  }
  act4() {
    this.expand4 = false;
    this.expand2 = true;
    this.expand3 = true;
    this.expand1 = true;
    this.expand5 = true;
    this.expand6 = true;
    this.expand7 = true;
    this.expand8 = true;
  }
  act5() {
    this.expand5 = false;
    this.expand2 = true;
    this.expand3 = true;
    this.expand4 = true;
    this.expand1 = true;
    this.expand6 = true;
    this.expand7 = true;
    this.expand8 = true;
  }
  act6() {
    this.expand6 = false;
    this.expand2 = true;
    this.expand3 = true;
    this.expand4 = true;
    this.expand5 = true;
    this.expand1 = true;
    this.expand7 = true;
    this.expand8 = true;
  }
  act7() {
    this.expand7 = false;
    this.expand2 = true;
    this.expand3 = true;
    this.expand4 = true;
    this.expand5 = true;
    this.expand6 = true;
    this.expand1 = true;
    this.expand8 = true;
  }
  act8() {
    this.expand8 = false;
    this.expand2 = true;
    this.expand3 = true;
    this.expand4 = true;
    this.expand5 = true;
    this.expand6 = true;
    this.expand7 = true;
    this.expand1 = true;
  }
  logout(){
    this.saveInLocal("login_detail", undefined)
    this.router.navigate(['']);
  }
}
