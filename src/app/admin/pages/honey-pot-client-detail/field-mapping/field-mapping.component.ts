import { Component, OnInit, Inject, ViewChild, ElementRef} from '@angular/core';
import { Router } from '@angular/router';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../../../api.service';


@Component({
  selector: 'app-field-mapping',
  templateUrl: './field-mapping.component.html',
  styleUrls: ['./field-mapping.component.css']
})
export class FieldMappingComponent implements OnInit {
  cli_type:any;
  Bank_list_type : any;
  product_list_type : any;
  portfolio_list_type : any;
  booleans = false;


  Bank_list : any = [];
  product_list :  any = [];
  portfolio_list :  any = [];
  types: any = [
    { "y": "Banks" },
    { "y": "Finance companies" },
    { "y": "Real Estate" },
    { "y": "Telecom" },
    { "y": "Others" },
  ];
 rows:any = [{ type: "Dog", name: "dog1" },
    { type: "Cat", name: "cat1" },
    { type: "Cat", name: "cat1" },
    { type: "Cat", name: "cat1" },]
  constructor(
    private router: Router,
    private _api: ApiService,
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private http: HttpClient,
  ) {
    this.Bank_list_get();
    this.product_list_get();
    this.portfolio_list_get();
   }

  ngOnInit(): void {

  }

  Bank_list_get() {
    this._api.client_list().subscribe(
      (response: any) => {
        console.log(response);
        let list = response.Data.reverse();
        for (let i = 0; i < list.length; i++) {
          let obj = { "y": list[i].Clinet_name};
          this.Bank_list.push(obj);
        }
        console.log(this.Bank_list);
      }
    );
  }

  product_list_get() {
    this._api.product_type_list().subscribe(
      (response: any) => {
        console.log(response);
        let list = response.Data.reverse();
        for (let i = 0; i < list.length; i++) {
          let obj = { "y": list[i].product_type};
          this.product_list.push(obj);
        }
        console.log(this.product_list);
      }
    );
  }


  portfolio_list_get() {
    this._api.portfolio_type_list().subscribe(
      (response: any) => {
        console.log(response);
        let list = response.Data.reverse();
        for (let i = 0; i < list.length; i++) {
          let obj = { "y": list[i].portfolio_type};
          this.portfolio_list.push(obj);
        }
        console.log(this.portfolio_list);
        this.booleans = true;
      }
    );
  }

}
