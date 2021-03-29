import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AgGridAngular } from 'ag-grid-angular';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-new-field-visit',
  templateUrl: './new-field-visit.component.html',
  styleUrls: ['./new-field-visit.component.css']
})
export class NewFieldVisitComponent implements OnInit {
  @ViewChild('agGrid',{static:false}) agGrid: AgGridAngular;
  FieldVisitcolumnDefs = [
    {headerName: 'ID', field: '_id', width: 250, checkboxSelection: true,headerCheckboxSelection: true,sortable: true, filter: true},
    {headerName: 'Account ID', field: 'account_id', resizable: true, sortable: true, filter: true},
    {headerName: 'Territory Name', field: 'fieldvisitterritory', resizable: true, sortable: true, filter: true},
    {headerName: 'Area Name', field: 'fieldvisitarea', resizable: true, sortable: true, filter: true},
    {headerName: 'First Address', field: 'firstaddress', resizable: true, sortable: true, filter: true},
    {headerName: 'Second Address', field: 'secondaddress', resizable: true, sortable: true, filter: true},
    {headerName: 'Requested Date', field: 'fvrqdate', resizable: true, sortable: true, filter: true},
    {headerName: 'Remarks', field: 'remarks', resizable: true, sortable: true, filter: true},
    {headerName: 'Created By', field: 'createdby', resizable: true, sortable: true, filter: true},
    {headerName: 'Creator Name', field: 'creator_name', resizable: true, sortable: true, filter: true},
    {headerName: 'Customer ID', field: 'customer_id', resizable: true, sortable: true, filter: true},
  ];
  
  FieldVisitForm: FormGroup;
  areaCodeList: any;
  bankCodeList: any;
  fieldvisitCodeList: any;
  mStatusList: any;
  sStatusList: any;
  FieldVisitList = [];
  login_Details: any;
  TracingToolsList: any;
  actionstakenList: any;
  constructor(private formBuilder:FormBuilder, private _api:ApiService, @Inject(SESSION_STORAGE) private storage: StorageService,) { 
    this.FieldVisitForm = this.formBuilder.group({
      _id:['',Validators.required],
      account_id:['',Validators.required],
      fieldvisitterritory:['',Validators.required],
      fieldvisitarea:['',Validators.required],
      firstaddress:['',Validators.required],
      secondaddress:['',Validators.required],
      fvrqdate:['',Validators.required],
      remarks:['',Validators.required],
      createdby:['',Validators.required],
      creator_name:['',Validators.required],
      customer_id: ['',Validators.required],          
    })
  }

  ngOnInit(): void {
    this._api.getlist_area_code().subscribe(data=>{
      if (data['Code'] == 200) {
        this.areaCodeList = data['Data'];
      } else {
        this.areaCodeList = [];
      }
    });
    this._api.getlist_bank_code().subscribe(data=>{
      if (data['Code'] == 200) {
        this.bankCodeList = data['Data'];
      } else {
        this.bankCodeList = [];
      }
    });
    this._api.getlist_fieldvisit_code().subscribe(data=>{
      if (data['Code'] == 200) {
        this.fieldvisitCodeList = data['Data'];
      } else {
        this.fieldvisitCodeList = [];
      }
    });
    this._api.getlist_mainStatus_code().subscribe(data=>{
      if (data['Code'] == 200) {
        this.mStatusList = data['Data'];
      } else {
        this.mStatusList = [];
      }
    });

    this._api.getlist_subStatus_code().subscribe(data=>{
      if (data['Code'] == 200) {
        this.sStatusList = data['Data'];
      } else {
        this.sStatusList = [];
      }
    });

    this._api.getlist_tracingtools().subscribe(data=>{
      if (data['Code'] == 200) {
        this.TracingToolsList = data['Data'];
      } else {
        this.TracingToolsList = [];
      }
    });

    this._api.getlist_actionstaken().subscribe(data=>{
      if (data['Code'] == 200) {
        this.actionstakenList = data['Data'];
      } else {
        this.actionstakenList = [];
      }
    });

    this.login_Details = this.getFromLocal("login_Details");
    this.FieldVisitForm.patchValue({
      createdby: this.login_Details.email_id,
      creator_name: this.login_Details.name,
      customer_id: localStorage.getItem("Customer_ID"),
      account_id:localStorage.getItem("Customer_ID")
    })
    this._api.getlist_new_fieldvisit(localStorage.getItem("Customer_ID")).subscribe(data=>{
      if (data['Code']==200) {
        this.FieldVisitList = data['Data'];
      } else {
        this.FieldVisitList = null;
      }
    });
  }

  getFromLocal(key): any {
    return this.storage.get(key);
  }

  addNewFieldVisit(){
    this.FieldVisitForm.patchValue({
      _id:new Date().getTime(),
      log_date:new Date()
    })
    if (this.FieldVisitForm.valid) {
      this._api.create_new_fieldvisit(this.FieldVisitForm.value).subscribe(data=>{
        if (data['Code'] == 200) {
          this.onPagereload();
          alert(data['Message']);
        } else {
          alert(data['Message']);
        }
      });
    } else {
      console.log(this.FieldVisitForm.value);
      
      alert('Form No Valid');
    }
  }

  onPagereload(){
      this._api.getlist_new_fieldvisit(localStorage.getItem("Customer_ID")).subscribe(data=>{
        if (data['Code']==200) {
          this.FieldVisitList = data['Data'];
        } else {
          this.FieldVisitList = null;
        }
      });
  }
}
