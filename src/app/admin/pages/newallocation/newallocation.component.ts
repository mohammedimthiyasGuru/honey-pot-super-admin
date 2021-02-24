import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-newallocation',
  templateUrl: './newallocation.component.html',
  styleUrls: ['./newallocation.component.css']
})
export class NewallocationComponent implements OnInit {
  assingedto : any;
  userList : any;
  Excel_Datas: any[];
  saved_Fields: any[];
  Finals_excel: any[];
  login_Details: any;
  searchQR:any;
  Agentselected: boolean;
  Excel_Datas2: any;
  Finals_excel2: any[];
  saved_Fields2: any;
  noData: boolean;
  assignee: any;
  tableData: any;
  selectedIndex: any;

  constructor(private _api:ApiService, @Inject(SESSION_STORAGE) private storage: StorageService, private router:Router) { }

  ngOnInit(): void {
    this._api.user_details_list().subscribe(data=>{
      if (data['Code']==200) {
        this.userList = data['Data'];
      } else {
        this.userList = [];
      }
    });

    this.Agentselected = false;

    this.login_Details = this.getFromLocal("login_Details");
   
    let req = {
      "user_email" : this.login_Details.email_id,
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
          if(response.Data[0].user_email == this.login_Details.email_id){
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

  getFromLocal(key): any {
    return this.storage.get(key);
  }

  getassignedto(event){
    this.Agentselected = true;
    this.assignee = event.target.value;
    let req = {
      "to" : this.assignee,
    }
    console.log(req);
    this._api.newallocation_getlist_id(req).subscribe(
      (response: any) => {
        console.log(response);
        this.tableData = response.Data;
        if( response.Data.length == 0){
          this.Excel_Datas2 = [];
          this.saved_Fields2 = [];
          alert("no data found");
        }else{
          this.Excel_Datas2 = [];
          if(response.Data[0].user_email == this.login_Details.email_id){
            let Excel_Datas_test = response.Data[0].datas;
            this.saved_Fields2 = response.Data[0].headers;
            for(let a = 0 ; a < Excel_Datas_test.length; a ++){
               let c = Excel_Datas_test[a][this.saved_Fields2.length];
               console.log(c);
               if(c == true){
                this.Excel_Datas2.push(Excel_Datas_test[a]);
               }
            }
          }else {
            alert("no data found");
          }
        }
      }
    );
    console.log(this.Excel_Datas2);
          // this.saved_Fields = response.Data[0].fields_details;
          // console.log(this.saved_Fields);
          this.saved_Fields2 = this.saved_Fields2;
          var datas = [];
          var d = new Date();
          var n = d.getTime();
          for(let b = 0 ;  b < this.Excel_Datas2.length ; b ++){
            this.Excel_Datas2[b].push(false);
            var object = {};
            object["insert_id"] = n + b ;
          for(let a  = 0 ; a < this.saved_Fields2.length ; a ++)
          {
            object[this.saved_Fields2[a].fields] = this.Excel_Datas2[b][a];
            if(a == this.saved_Fields2.length - 1){
              datas.push(object);
            }
          }
            if(b == this.Excel_Datas2.length - 1){
               console.log(datas);
               this.Finals_excel2 = datas;
          }
          }

          
  }

  assignto(){

    let req = {
      "user_email" : this.login_Details.email_id,
      "user_id" : this.login_Details.user_id,
      "Date" : ""+new Date(),
      "headers" : this.saved_Fields2,
      "datas" : this.Excel_Datas2,
      "Date_and_Time" : ""+new Date(),
      "assigner_id":this.login_Details.email_id,
      "assignee_id":this.assignee
    }
    console.log(req);
    this._api.newallocation_data(req).subscribe(
      (response: any) => {
        console.log(response);
        alert("Successfully Allocated");
      }
    );
  }

  onSelect(data,event, index){
    if (event.target.checked) {
      this.Excel_Datas2.push(data)
    } else {
      this.Excel_Datas2 = [];
      var pushData = this.Excel_Datas2.splice(index,1);
      this.Excel_Datas2 = pushData;
    }
    
  }

  getselectedTable(index,ite){
    this.selectedIndex = index;
    console.log(ite)
  }

  goto(page,column, row){
    this.router.navigateByUrl(page);
    let dataList = [];
    for (let i = 0; i < column.length; i++) {
      dataList.push({column:column[i].fields,row:row[i]});
    }
    this.storage.set("_storedRecord",{dataList});
    
  }




  
}
