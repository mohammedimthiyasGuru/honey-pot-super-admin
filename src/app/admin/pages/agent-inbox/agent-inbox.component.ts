import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { ApiService } from '../../../api.service';
// import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import Swal from 'sweetalert2';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-agent-inbox',
  templateUrl: './agent-inbox.component.html',
  styleUrls: ['./agent-inbox.component.css']
})
export class AgentInboxComponent implements OnInit {
  rows = [];
  searchQR: any;
  value1: any;
  Name: any;
  con_name: any;
  con_role: any;
  con_pone: any;
  cli_type: any;
  contactarray: any = [];
  address: any;

  Excel_Datas : any;
  Finals_excel : any;


  types: any = [
    { "y": "Banks" },
    { "y": "Finance companies" },
    { "y": "Real Estate" },
    { "y": "Telecom" },
    { "y": "Others" },
  ];
  type: any = [
    { "y": "Direct" },
    { "y": "Transferred" },
    { "y": "Temporary" },
  ];
  typ: any = [
    { "y": "New" },
    { "y": "updated" },
    { "y": "re-activated" },
  ];

  saved_Fields : any;

  constructor(
    private router: Router,
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private _api: ApiService,
    // private router: Router
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

    var login_Details = this.getFromLocal("login_Details");

    let req = {
      "user_email" : login_Details.email_id,
    }
    console.log(req);
    this._api.allocation_details_list(req).subscribe(
      (response: any) => {
        console.log(response);
        if( response.Data.length == 0){
    this.Excel_Datas = [];
    this.saved_Fields = [];
         alert("no data found");
        }else{
          this.Excel_Datas = [];
          if(response.Data[0].user_email == login_Details.email_id){
            let Excel_Datas_test = response.Data[0].datas;
            this.saved_Fields = response.Data[0].headers;
            for(let a = 0 ; a < Excel_Datas_test.length; a ++){
               let c = Excel_Datas_test[a][this.saved_Fields.length];
               console.log(c);
               if(c == true){
                this.Excel_Datas.push(Excel_Datas_test[a]);
               }
            }
          }else {
            alert("no data found");
          }
        }
      }
    );
    console.log(this.Excel_Datas);
          // this.saved_Fields = response.Data[0].fields_details;
          // console.log(this.saved_Fields);
          this.saved_Fields = this.saved_Fields.reverse();
          var datas = [];
          var d = new Date();
          var n = d.getTime();
          for(let b = 0 ;  b < this.Excel_Datas.length ; b ++){
            this.Excel_Datas[b].push(false);
            var object = {};
            object["insert_id"] = n + b ;
          for(let a  = 0 ; a < this.saved_Fields.length ; a ++)
          {
            object[this.saved_Fields[a].fields] = this.Excel_Datas[b][a];
            if(a == this.saved_Fields.length - 1){
              datas.push(object);
            }
          }
            if(b == this.Excel_Datas.length - 1){
               console.log(datas);
               this.Finals_excel = datas;
          }
          }
  }
  acc_list() {
    this.router.navigateByUrl('/admin_panel/Agent_acc_list')
  }

  saveInLocal(key, val): void {
    this.storage.set(key, val);
  }

  getFromLocal(key): any {
    return this.storage.get(key);
  }

  profile() {
    this.router.navigateByUrl('/admin_panel/Client_profile')
  }
}
