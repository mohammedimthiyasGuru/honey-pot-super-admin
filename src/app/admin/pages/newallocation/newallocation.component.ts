import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AgGridAngular } from 'ag-grid-angular';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { ApiService } from 'src/app/api.service';
declare var $:any;

@Component({
  selector: 'app-newallocation',
  templateUrl: './newallocation.component.html',
  styleUrls: ['./newallocation.component.css']
})
export class NewallocationComponent implements OnInit {
  @ViewChild('agGrid',{static:false}) agGrid: AgGridAngular;
  @ViewChild('agGrid2',{static:false}) agGrid2: AgGridAngular;
  assingedto : any;
  userList : any;
  Excel_Datas = [];
  saved_Fields = [];
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
  rowData = [];
  myHeaders = [];
  tempDefs = [];
  columnDefs = [];
  dataLoaded: boolean;
  result: {};
  myrowData=[];
  selectedData = [];
  rowData2 = [];
  myHeaders2 = [];
  tempDefs2 = [];
  columnDefs2 = [];
  dataLoaded2: boolean;
  result2: {};
  myrowData2 = [];
  transferData: any[];
  keyValues = [];
  designationList: any[];
  designationof: any;
  userFilter: any = { designation: '', bankname:'' };
  accountList: string;

  constructor(private _api:ApiService, @Inject(SESSION_STORAGE) private storage: StorageService, private router:Router) { }

  ngOnInit(): void {
    this.login_Details = this.getFromLocal("login_Details");
    this.accountList = localStorage.getItem('account_List');
    console.log(this.accountList);
    
    this.designationof = "";
    this.assingedto = "";

    this._api.user_details_list().subscribe(data=>{
      if (data['Code']==200) {
        this.userList = data['Data'];
      } else {
        this.userList = [];
      }
    });

    this._api.designation_type_list().subscribe( data => {
        if (data['Code']==200) {
          this.designationList = data['Data'];
        } else {
          this.designationList = [];
        }
      }
    );

    this.Agentselected = false;
   
    let req = {
      "to" : this.login_Details.email_id,
    }
    console.log(req);
    this._api.allocation_details_id(this.accountList).subscribe(
      (response: any) => {
        console.log(response);
        // this.tableData = response.Data;
        if( response.Data.length == 0){
          this.Excel_Datas = [];
          this.saved_Fields = [];
          alert("no data found");
        }else{
           this.saved_Fields = response.Data[0].headers;
           this.rowData = response.Data[0].datas;
           this.keyValues = response.Data[0].datasKeyval;  
            for (let i = 0; i < this.saved_Fields.length; i++) {
              this.myHeaders[i] = this.saved_Fields[i].fields;
            }
           for (let i = 0; i < this.rowData.length; i++) {
             this.subArray(this.myHeaders,this.rowData[i]);
           }
           this.tempDefs = [];
          for (let i = 0; i < this.saved_Fields.length; i++) {
            console.log(this.saved_Fields[i].fields);
            if (i == 0) {
              this.tempDefs.push({headerName: this.saved_Fields[i].fields, field:this.saved_Fields[i].fields, filter:true, sortable:true , checkboxSelection:true, resizable: false});
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
        }
      }
    );
  }
  subArray(cols,rows){

    this.result = {};
    console.log(cols);
    console.log(rows);
    
    for (var i = 0; i < cols.length; i++) {
            this.result[cols[i]] = rows[i];
    }
    this.mainArray(this.result);
  }

  mainArray(data){
    this.myrowData.push(data);
    console.log(this.myrowData);
    this.dataLoaded = true;
  }

  
  getFromLocal(key): any {
    return this.storage.get(key);
  }

  getassignedto(event){
    this.myrowData2 = [];
    this.Agentselected = true;
    this.dataLoaded2 = false;
    this.assignee = event.target.value;
    let req = {
      "to" : this.assignee,
    }
    console.log(req);
    this._api.allocation_details_getassignedto(this.assignee).subscribe(
      (response: any) => {
        console.log(response);
        this.tableData = response.Data;
        if( response.Data.length == 0){
          this.Excel_Datas2 = [];
          this.saved_Fields2 = [];
          alert("no data found");
        }else{
                this.saved_Fields2 = response.Data[0].headers;
                this.rowData2 = response.Data[0].datas; 
              for (let i = 0; i < this.saved_Fields2.length; i++) {
                this.myHeaders2[i] = this.saved_Fields2[i].fields;
              }
              for (let i = 0; i < this.rowData2.length; i++) {
                this.subArray2(this.myHeaders2,this.rowData2[i]);
              }
            this.tempDefs2 = [];
            for (let i = 0; i < this.saved_Fields2.length; i++) {
              console.log(this.saved_Fields2[i].fields);
              if (i == 0) {
                this.tempDefs2.push({headerName: this.saved_Fields2[i].fields, field:this.saved_Fields2[i].fields, filter:true, sortable:true , checkboxSelection:true, resizable: false});
              } else {
                this.tempDefs2.push({headerName: this.saved_Fields2[i].fields, field:this.saved_Fields2[i].fields, filter:true, sortable:true , checkboxSelection:false, resizable: true});
              }
              
            }
            this.columnDefs2 = this.tempDefs2;
            console.log(this.columnDefs2);
            if (this.columnDefs2.length != 0) {
              // this.dataLoaded2 = true;
            } else {
              this.dataLoaded2 = false;
            }
            }
      }
    );        
  }


  subArray2(cols,rows){

    this.result2 = {};
    console.log(cols);
    console.log(rows);
    
    for (var i = 0; i < cols.length; i++) {
            this.result2[cols[i]] = rows[i];
    }
    this.mainArray2(this.result2);
  }

  mainArray2(data){
    this.myrowData2.push(data);
    console.log(this.myrowData2);
    this.dataLoaded2 = true;
  }

  getdesignationType(event){
    this.userFilter.designation = event.target.value;
    this.userFilter.bankname = this.login_Details.bankname;
  }

  rellocate(){
    const selectedNodes = this.agGrid2.api.getSelectedNodes();
    const selectedData = selectedNodes.map(node => node.data );
    console.log(selectedData);
    
    if (selectedData.length >= 1) {
      $('#exampleModal').modal('show')
    }else{

    }
  }

  assignto(){

    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map(node => node.data );
    
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
        "user_id" : this.login_Details.user_id,
        "Date" : ""+new Date(),
        "headers" : this.saved_Fields,
        "datas" : this.selectedData,
        "Date_and_Time" : ""+new Date(),
        "assigner_id":this.login_Details.email_id,
        "assignee_id":this.assignee
      }
      console.log(req);
      this._api.allocation_details_add(req).subscribe(
        (response: any) => {
          console.log(response);
          if (response['Code'] = 200) {
            alert("Successfully Allocated");
          } else {
            alert(response['Message']);
          }
        }
      );

    }else {
      alert("Select atleast one Record");
    }

    
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



  goto(page){
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map(node => node.data );
    console.log(selectedData);
    
    this.transferData = [];
      for (let i = 0; i < selectedData.length; i++) {
        var obj = selectedData[i];
        delete obj.insert_id;
        var result = Object.values(obj);
        console.log(result);
        this.transferData.push(result);
    }

    if (selectedData.length == 1) {
      this.router.navigateByUrl(page);
      let dataList = [];

      var myrow = [];
      for (let i = 0; i < result.length; i++) {
        myrow.push(result[i])
      }
      for (let i = 0; i < selectedData.length; i++) {
        for (let i = 0; i < this.saved_Fields.length; i++) {
          dataList.push({column:this.saved_Fields[i].fields,row:myrow[i]});
        }
      }
      
      this.storage.set("_storedRecord",{dataList,"keyvalue":selectedData[0]});
    } else {
      alert("Select Only One Record");
    }
    
    
  }

  onPagereload(){

  }




  
}
