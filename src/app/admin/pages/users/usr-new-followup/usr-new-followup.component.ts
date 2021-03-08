import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AgGridAngular } from 'ag-grid-angular';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-usr-new-followup',
  templateUrl: './usr-new-followup.component.html',
  styleUrls: ['./usr-new-followup.component.css']
})
export class UsrNewFollowupComponent implements OnInit {
  @ViewChild('agGrid',{static:false}) agGrid: AgGridAngular;
  FollowUpcolumnDefs = [
    {headerName: 'ID', field: '_id', width: 250, checkboxSelection: true,headerCheckboxSelection: true,sortable: true, filter: true},
    {headerName: 'Log Date', field: 'log_date', resizable: true, sortable: true, filter: true},
    {headerName: 'Log Type', field: 'log_type', resizable: true, sortable: true, filter: true},
    {headerName: 'FollowUp Date', field: 'fdate', resizable: true, sortable: true, filter: true},
    {headerName: 'No of Mapped Accounts', field: 'no_mapped_account', resizable: true, sortable: true, filter: true},
    {headerName: 'Request Type', field: 'request_type', resizable: true, sortable: true, filter: true},
    {headerName: 'Territory', field: 'territory', resizable: true, sortable: true, filter: true},
    {headerName: 'Field Visit', field: 'fvarea', resizable: true, sortable: true, filter: true},
    {headerName: 'Main Status', field: 'mstatus', resizable: true, sortable: true, filter: true},
    {headerName: 'Sub Status', field: 'substatus', resizable: true, sortable: true, filter: true},
    {headerName: 'Bank Code', field: 'bcode', resizable: true, sortable: true, filter: true},
    {headerName: 'Action To Taken', field: 'actiontotake', resizable: true, sortable: true, filter: true},
    {headerName: 'Tracing Tools', field: 'tracingtool', resizable: true, sortable: true, filter: true},
    {headerName: 'Created By', field: 'createdby', resizable: true, sortable: true, filter: true},
    {headerName: 'Creator Name', field: 'creator_name', resizable: true, sortable: true, filter: true},
    {headerName: 'Customer ID', field: 'customer_id', resizable: true, sortable: true, filter: true},
    {headerName: 'Created At', field: 'createdAt', resizable: true, sortable: true, filter: true},
    {headerName: 'Update At', field: 'updatedAt', resizable: true, sortable: true, filter: true},
    {headerName: 'Options', width: 120,cellRenderer: function(params) {
      return "";
    }},
  ];
  
  FollowUpForm: FormGroup;
  areaCodeList: any;
  bankCodeList: any;
  fieldvisitCodeList: any;
  mStatusList: any;
  sStatusList: any;
  FollowUpList = [];
  login_Details: any;
  constructor(private formBuilder:FormBuilder, private _api:ApiService, @Inject(SESSION_STORAGE) private storage: StorageService,) { 
    this.FollowUpForm = this.formBuilder.group({
      _id:['',Validators.required],
      log_date:['',Validators.required],
      log_type:['',Validators.required],
      no_mapped_account:['',Validators.required],
      request_type:['',Validators.required],
      territory:['',Validators.required],
      fvarea:['',Validators.required],
      remarks:['',Validators.required],
      mstatus:['',Validators.required],
      substatus:['',Validators.required],
      fdate:['',Validators.required],
      bcode:['',Validators.required],
      actiontotake:['',Validators.required],
      tracingtool:['',Validators.required],
      createdby:['',Validators.required],
      creator_name:['',Validators.required],
      customer_id:['',Validators.required]
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

    this.login_Details = this.getFromLocal("login_Details");
    this.FollowUpForm.patchValue({
      createdby: this.login_Details.email_id,
      creator_name: this.login_Details.name,
      customer_id: localStorage.getItem("Customer_ID"),
    })
    this._api.list_FollowUp_getlist(localStorage.getItem("Customer_ID")).subscribe(data=>{
      if (data['Code']==200) {
        this.FollowUpList = data['Data'];
      } else {
        this.FollowUpList = null;
      }
    });
  }

  getFromLocal(key): any {
    return this.storage.get(key);
  }

  addNewFollowUp(){
    this.FollowUpForm.patchValue({
      _id:new Date().getTime(),
      log_date:new Date()
    })
    if (this.FollowUpForm.valid) {
      this._api.create_FollowUp(this.FollowUpForm.value).subscribe(data=>{
        if (data['Code'] == 200) {
          this.onPagereload();
          alert(data['Message']);
        } else {
          alert(data['Message']);
        }
      });
    } else {
      console.log(this.FollowUpForm.value);
      
      alert('Form No Valid');
    }
  }

  onPagereload(){
      this._api.list_FollowUp_getlist(localStorage.getItem("Customer_ID")).subscribe(data=>{
        if (data['Code']==200) {
          this.FollowUpList = data['Data'];
        } else {
          this.FollowUpList = null;
        }
      });
  }

}
