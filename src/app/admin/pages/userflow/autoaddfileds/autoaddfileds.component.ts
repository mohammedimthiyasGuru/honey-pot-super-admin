import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../../../api.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-autoaddfileds',
  templateUrl: './autoaddfileds.component.html',
  styleUrls: ['./autoaddfileds.component.css']
})
export class AutoaddfiledsComponent implements OnInit {
  type: any;

  fields_detail: any;
  data_type: any;
  length: any;

  final_not_match : any;
  fields_mapping_fetch : any;
  converted : any = [];

  converted1 : any = [];



  rows: any;
  searchQR: any;
  id: any;
  edit_f:boolean = false;

  timeLeft: number = 60;
  interval;

  profolio_list: any = [
    { 'y': "Text" },
    { 'y': "Number" },
    { 'y': "Boolean" }
  ];

  constructor(
    private router: Router,
    private _api: ApiService,
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this._api.fields_list().subscribe(
      (response: any) => {
        console.log(response);
        this.rows = response.Data.reverse();
        console.log(this.rows);
      }
    );
    this.final_not_match = this.getFromLocal("final_not_match");
    this.fields_mapping_fetch = this.getFromLocal("fields_mapping_fetch");
    console.log("dfadsfasdfasdf",this.fields_mapping_fetch);
    console.log("final not match",this.final_not_match);
    this.converted = [];
    for(let a = 0 ; a < this.final_not_match.length; a++){
       let c = {
        "fields": this.final_not_match[a].final_not_match,
        "fields_detail" : '',
        "data_type" : { 'y': "Text" },
        "length" : 0,
        "addedby": "Admin"
      }
      this.converted.push(c);
    }
    console.log("converted data", this.converted);
  }

  saveInLocal(key, val): void {
    this.storage.set(key, val);
  }

  getFromLocal(key): any {
    return this.storage.get(key);
  }



  add() {
    if (this.type == undefined || this.type == '') {
      alert("Please enter valid inputs")
    } else {
      let a = {
        "fields": this.type,
        "fields_detail" : this.fields_detail,
        "data_type" : this.data_type.y,
        "length" : this.length,
        "addedby": "Admin"
      };
      console.log(a);

      this._api.fields_add(a).subscribe(
        (response: any) => {
          console.log(response);
          if (response.Code === 200) {
            alert(response.Message);
            this.type = undefined;
            this.fields_detail = undefined;
            this.data_type = undefined;
            this.length = undefined;
            this.ngOnInit();
          } else {
            alert(response.Message);
          }
        }
      );
    }
  }
  show_edit(item) {
    this.id = item._id;
    this.edit_f = true;
    this.type = item.fields;
    this.fields_detail = item.fields_detail;
    this.data_type = item.data_type;
    this.length = item.length;
  }
  edit() {
    if (this.type == undefined || this.type == '') {
      alert("Please enter valid input")
    } else {
      let a = {
        "_id": this.id,
        "fields": this.type,
        "fields_detail" : this.fields_detail,
        "data_type" : this.data_type,
        "length" : this.length,
        "addedby": "Admin"
      };
      console.log(a);
      this._api.fields_edit(a).subscribe(
        (response: any) => {
          console.log(response);
          if (response.Code === 200) {
            alert(response.Message);
            this.edit_f = false;
            this.type = undefined;
            this.fields_detail = undefined;
    this.data_type = undefined;
    this.length = undefined;
            this.ngOnInit();
          } else {
            alert(response.Message);
          }
        }
      );
    }
  }
  delete(id) {
    let a = {
      "_id": id
    }
    this._api.fields_delete(a).subscribe(
      (response: any) => {
        console.log(response);
        if (response.Code === 200) {
          alert(response.Message);
          this.ngOnInit();
        } else {
          alert(response.Message);
        }
      }
    );
  }
  cancel(){
    this.type = undefined;
    this.edit_f = false;
  }

  before_save_fields() {
    if (this.fields_detail == undefined || this.data_type == undefined || this.length == undefined ) {
      alert("Please enter all fields")
    } else {
      this.save_fields();
    }
  }
  save_fields(){
   console.log(this.converted);

   this.timeLeft = this.converted.length;;
   this.interval = setInterval(() => {
    if(this.timeLeft > 0) {
      this.timeLeft--;
      console.log(this.timeLeft);
      let a = {
        "fields": this.converted[this.timeLeft].fields,
        "fields_detail" : this.converted[this.timeLeft].fields_detail,
        "data_type" : this.converted[this.timeLeft].data_type.y,
        "length" : this.converted[this.timeLeft].length,
        "addedby": "Admin"
      };
      console.log(a);
      this._api.fields_add(a).subscribe(
        (response: any) => {
          console.log(response);
          if (response.Code === 200) {
            // alert(response.Message);
            console.log(response.Message);
            let x = {
               "addedby":response.Data.addedby,
               "check_status":response.Data.check_status,
               "createdAt":response.Data.createdAt,
               "data_type":response.Data.data_type,
               "fields":response.Data.fields,
               "fields_detail":response.Data.addedby,
               "index":response.Data.addedby,
               "length":response.Data.addedby,
               "updatedAt" : response.Data.addedby,
               "__v" : response.Data.addedby,
               "_id" : response.Data.addedby
            }
            this.converted1.push(response.Data);
          } else {
            console.log(response.Message);
          }
        }
      );
    } else {
      clearInterval(this.interval);
      this.save_fields1();
    }
  },2000)
  }



  save_fields1(){
    console.log(this.converted1);

    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
        console.log(this.timeLeft);
        let a = {
          "fields": this.converted[this.timeLeft].fields,
          "fields_detail" : this.converted[this.timeLeft].fields_detail,
          "data_type" : this.converted[this.timeLeft].data_type.y,
          "length" : this.converted[this.timeLeft].length,
          "addedby": "Admin"
        };
        console.log(a);
        this._api.fields_add(a).subscribe(
          (response: any) => {
            console.log(response);
            if (response.Code === 200) {
              // alert(response.Message);
              console.log(response.Message);
              this.converted1.push(response.Data);
            } else {
              console.log(response.Message);
            }
          }
        );
      } else {
        clearInterval(this.interval);
        this.save_fields1();
      }
    },2000)
  }
 
  openworklist(){
    Swal.fire({
      // title: 'Are you sure?',
      text: 'Enter all the fields in the table',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((result) => {
      
    })

  }





}
