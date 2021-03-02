import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-newreallocation',
  templateUrl: './newreallocation.component.html',
  styleUrls: ['./newreallocation.component.css']
})
export class NewreallocationComponent implements OnInit {
  @ViewChild('agGrid',{static:false}) agGrid: AgGridAngular;
  reallocationList: string;
  Excel_Datas = [];
  saved_Fields = [];
  rowData = [];
  keyValues = [];
  myHeaders = [];
  tempDefs = [];
  columnDefs = [];
  dataLoaded: boolean;
  result: {};
  myrowData = [];

  constructor(private _api: ApiService) { }

  ngOnInit(): void {
    this.reallocationList = localStorage.getItem("reallocation_account_List")
    this.dataLoaded = false;
    this._api.allocation_details_id(this.reallocationList).subscribe(
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

}
