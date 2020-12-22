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
  constructor(
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private router: Router,
    private _api: ApiService,
  ) { }

  ngOnInit(): void {
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
}
