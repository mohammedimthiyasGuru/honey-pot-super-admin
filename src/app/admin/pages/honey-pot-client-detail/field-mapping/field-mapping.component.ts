import { Component, OnInit, Inject, ViewChild, ElementRef} from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../../../api.service';
import Swal from 'sweetalert2';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-field-mapping',
  templateUrl: './field-mapping.component.html',
  styleUrls: ['./field-mapping.component.css']
})
export class FieldMappingComponent implements OnInit {
  cli_type:any;
  booleans = false;
  Bank_list : any = [];
  product_list :  any = [];
  portfolio_list :  any = [];
  rows: any;
  selectedRows: any;
  selectedProducts: any[]= [];

  types: any = [
    { "y": "Banks" },
    { "y": "Finance companies" }  ,
    { "y": "Real Estate" },
    { "y": "Telecom" },
    { "y": "Others" },
  ];
//  rows:any = [{ type: "Dog", name: "dog1" },
//     { type: "Cat", name: "cat1" },
//     { type: "Cat", name: "cat1" },
//     { type: "Cat", name: "cat1" },]
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
    this._api.fields_list().subscribe(
        (response: any) => {
          console.log(response);
          this.rows = response.Data.reverse();
          console.log(this.rows);
        }
      );
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

  removeSelected(item) {
    let i = this.selectedProducts.indexOf(item);
    if (i > -1) {
      this.selectedProducts.splice(i, 1);
    }
    return this.selectedProducts; 
  }

}
