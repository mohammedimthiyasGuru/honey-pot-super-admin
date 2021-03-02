import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { ApiService } from '../../../../api.service';
// import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import Swal from 'sweetalert2';
import { Router, RouterModule } from '@angular/router';
import { AgGridAngular } from 'ag-grid-angular';


@Component({
  selector: 'app-uploaded-list',
  templateUrl: './uploaded-list.component.html',
  styleUrls: ['./uploaded-list.component.css']
})
export class UploadedListComponent implements OnInit {
  @ViewChild('agGrid',{static:false}) agGrid: AgGridAngular;
  displayPosition: boolean;
  rows = [];
  searchQR: any;
  value1: any;
  rangeValues: number[] = [0,100];

  Finals_excel : any;

  Bank_list_gets : any;
  product_list_gets  : any;
  portfolio_list_gets  : any;
  Bank_list : any;
  portfolio_list : any;
  booleans : any;
  product_list : any;
  User_details1 : any;






  Excel_Datas :  any;
  saved_Fields : any;




  user_list_details : any;
  Company_details : any;
  Designation_details2 : any;
  report_to : any;
  report_to_id : any;
  company_name : any;
  report_to_design : any;

  Designation_details1 : any;
  MyuploadList = [];
  tempDefs = [];
  columnDefs = [];
  dataLoaded: boolean;
  selectedData = [];
  login_Details: any;
  bankName: any;
  bankame: any;
  portfolio: any;
  product: any;


  constructor(
    private router: Router,
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private _api: ApiService,
    // private router: Router
  ) { }



  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.company_details();
    this.login_Details = this.getFromLocal("login_Details");
    this.rows = [{ type: "Dog", name: "dog1" },
    { type: "Cat", name: "cat1" },
    { type: "Cat", name: "cat1" },
    { type: "Cat", name: "cat1" },
    ]

    this.Excel_Datas = this.getFromLocal("excel_final");
    let fields_mapping_fetch = this.getFromLocal("fields_mapping_fetch");
    console.log(this.Excel_Datas);
    this.bankName = fields_mapping_fetch.bank;
    this.portfolio = fields_mapping_fetch.portfolio;
    this.product = fields_mapping_fetch.product;
    this._api.fields_mapping_fetch(fields_mapping_fetch).subscribe(
      (response: any) => {
        if(response.Code === 404){
          Swal.fire('No Data Found');
          this.saved_Fields = [];
        }else{
          this.saved_Fields = response.Data[0].fields_details;
          this.saved_Fields = this.saved_Fields.reverse();

          this.tempDefs = [];
          for (let i = 0; i < this.saved_Fields.length; i++) {
            console.log(this.saved_Fields[i].fields);
            if (i == 0) {
              this.tempDefs.push({headerName: "RecordID", field:"insert_id", filter:true, sortable:true , checkboxSelection:true, resizable: false, headerCheckboxSelection: true});
              this.tempDefs.push({headerName: this.saved_Fields[i].fields, field:this.saved_Fields[i].fields, filter:true, sortable:true , checkboxSelection:false, resizable: false});
            } else {
              this.tempDefs.push({headerName: this.saved_Fields[i].fields, field:this.saved_Fields[i].fields, filter:true, sortable:true , checkboxSelection:false, resizable: true});
            }
            
          }
          this.columnDefs = this.tempDefs;
          console.log(this.columnDefs);
          if (this.columnDefs.length != 0) {
            this.dataLoaded = true;
          } else {
            this.dataLoaded = false;
          }
          
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
      }
    );



  }




  saveInLocal(key, val): void {
    this.storage.set(key, val);
  }

  getFromLocal(key): any {
    return this.storage.get(key);
  }

  client_form() {
    // this.router.navigateByUrl('/admin_panel/client-form')
  }
  profile() {
    // this.router.navigateByUrl('/admin_panel/Client_profile')
  }



  onSelect(data,event, index){
    if (event.target.checked) {
      this.MyuploadList.push(data)
    } else {
      this.MyuploadList = [];
      var pushData = this.MyuploadList.splice(index,1);
      this.MyuploadList = pushData;
    }
  }


  company_details(){
    this._api.user_details_list().subscribe(
      (response: any) => {
        console.log(response);
        this.user_list_details = response.Data;
        this.Company_details = [];
       var hash = response.Data.reduce((p,c) => (p[c.bankname] ? p[c.bankname].push(c) : p[c.bankname] = [c],p) ,{});
       var  newData = Object.keys(hash).map(k => ({color: k, car: hash[k]}));
       console.log(newData);
        for(let a = 0 ; a < newData.length; a ++){
          let x =  { 'y': newData[a].color}
          this.Company_details.push(x);
        }
        // this.rows = response.Data.reverse();
        // console.log(this.rows);
      }
    );


    this._api.designation_type_list().subscribe(
      (response: any) => {
        console.log(response);
        this.Designation_details1 = [];
        this.Designation_details2 = [];
        for(let a = 0 ; a < response.Data.length; a ++){
          let x =  { 'y': response.Data[a].designation_type}
          let y =  { 'x': response.Data[a].designation_type}
          this.Designation_details1.push(x);
          this.Designation_details2.push(y);
        }
        this.Designation_details1 = this.Designation_details1.reverse();
        this.Designation_details2 = this.Designation_details2.reverse();
        // console.log(this.rows);
      }
    );


  }


  Report_fetch(){
    console.log(this.report_to);
    for(let a = 0 ; a < this.user_list_details.length; a ++){
      if(this.user_list_details[a].email_id == this.report_to.y){
         this.report_to_id = this.user_list_details[a]._id;
         console.log(this.report_to_id);
      }
    }
  }


  fetchuser_1(){
    console.log(this.company_name);
    console.log(this.report_to_design);

    let req = {
      "bankname" : this.company_name.y,
      "designation" : this.report_to_design.y
    }
    console.log(req);
    this._api.user_details_list_by_com(req).subscribe(
      (response: any) => {
        console.log(response);
        if(response.Data.length == 0){
         alert("There is no user with this designations");
        }else {
          this.User_details1 = [];
          for(let a = 0 ; a < response.Data.length; a ++){
            let x =  { 'y': response.Data[a].email_id}
            this.User_details1.push(x);
          }
          this.User_details1 = this.User_details1.reverse();
          // console.log(this.rows);
        }
      }
    );
  }



  submit_allocation(){
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map(node => node.data );
    console.log(selectedData);
    
    if (selectedData.length >= 1) {
      this.selectedData = [];
      for (let i = 0; i < selectedData.length; i++) {
        var obj = selectedData[i];
        delete obj.insert_id;
        var result = Object.values(obj);
        console.log(result);
        this.selectedData.push(result);
      }

      let req = {
        "user_email" : this.login_Details.email_id,
        "user_id" : this.login_Details.email_id,
        "Date" : ""+new Date(),
        "headers" : this.saved_Fields,
        "datas" : this.selectedData,
        "Date_and_Time" : ""+new Date(),
        "assigner_id":this.login_Details.email_id,
        "assignee_id":this.report_to.y,
        "bankname":this.bankName,
        "product":this.product,
        "portfoliotype":this.portfolio,
      }
      console.log(req);
      this._api.allocation_details_add(req).subscribe(
        (response: any) => {
          console.log(response);
          alert("allocation Done");
        }
      );
    } else {
        alert("Select atleat one record");
    }
    
    
  }


  showPositionDialog() {
    this.displayPosition = true;
  }

  cus360(){
    // this.router.navigateByUrl('/admin_panel/user/createuser')
  }
}
