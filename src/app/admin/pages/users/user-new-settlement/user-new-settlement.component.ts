import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AgGridAngular } from 'ag-grid-angular';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-user-new-settlement',
  templateUrl: './user-new-settlement.component.html',
  styleUrls: ['./user-new-settlement.component.css']
})
export class UserNewSettlementComponent implements OnInit {
  @ViewChild('agGrid',{static:false}) agGrid: AgGridAngular;
  SettlementcolumnDefs = [
    {headerName: 'ID', field: '_id', width: 250, checkboxSelection: true,headerCheckboxSelection: true,sortable: true, filter: true},
    {headerName: 'Settlement Type', field: 'settlement_type', resizable: true, sortable: true, filter: true},
    {headerName: 'Account ID', field: 'account_id', resizable: true, sortable: true, filter: true},
    {headerName: 'Current Total', field: 'current_total', resizable: true, sortable: true, filter: true},
    {headerName: 'Payment Date', field: 'payment_date', resizable: true, sortable: true, filter: true},
    {headerName: 'Amount', field: 'amount', resizable: true, sortable: true, filter: true},
    {headerName: 'No of Installment', field: 'no_of_installments', resizable: true, sortable: true, filter: true},
    {headerName: 'First Installment', field: 'fst_installment', resizable: true, sortable: true, filter: true},
    {headerName: 'Approval Status', field: 'approval_status', resizable: true, sortable: true, filter: true},
    {headerName: 'Details', field: 'details_notes', resizable: true, sortable: true, filter: true},
    {headerName: 'Created By', field: 'createdby', resizable: true, sortable: true, filter: true},
    {headerName: 'Creator Name', field: 'creator_name', resizable: true, sortable: true, filter: true},
    {headerName: 'Customer ID', field: 'customer_id', resizable: true, sortable: true, filter: true},
  ];
  
  SettlementForm: FormGroup;
  areaCodeList: any;
  bankCodeList: any;
  fieldvisitCodeList: any;
  mStatusList: any;
  sStatusList: any;
  SettlementList = [];
  login_Details: any;
  TracingToolsList: any;
  actionstakenList: any;
  constructor(private formBuilder:FormBuilder, private _api:ApiService, @Inject(SESSION_STORAGE) private storage: StorageService,) { 
    this.SettlementForm = this.formBuilder.group({
      _id:['',Validators.required],
      settlement_type:['',Validators.required],
      account_id:['',Validators.required],
      current_total:['',Validators.required],
      payment_date:['',Validators.required],
      amount:['',Validators.required],
      no_of_installments:['',Validators.required],
      fst_installment:['',Validators.required],
      approval_status:['',Validators.required],
      details_notes:['',Validators.required],
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
    this.SettlementForm.patchValue({
      createdby: this.login_Details.email_id,
      creator_name: this.login_Details.name,
      customer_id: localStorage.getItem("Customer_ID"),
      account_id:localStorage.getItem("Customer_ID")
    })
    this._api.getlist_new_settlement(localStorage.getItem("Customer_ID")).subscribe(data=>{
      if (data['Code']==200) {
        this.SettlementList = data['Data'];
      } else {
        this.SettlementList = null;
      }
    });
  }

  getFromLocal(key): any {
    return this.storage.get(key);
  }

  addNewSettlement(){
    this.SettlementForm.patchValue({
      _id:new Date().getTime(),
    });
    if (this.SettlementForm.valid) {
      this._api.create_new_settlement(this.SettlementForm.value).subscribe(data=>{
        if (data['Code'] == 200) {
          this.onPagereload();
          alert(data['Message']);
        } else {
          alert(data['Message']);
        }
      });
    } else {
      console.log(this.SettlementForm.value);
      
      alert('Form No Valid');
    }
  }

  onPagereload(){
      this._api.getlist_new_settlement(localStorage.getItem("Customer_ID")).subscribe(data=>{
        if (data['Code']==200) {
          this.SettlementList = data['Data'];
        } else {
          this.SettlementList = null;
        }
      });
  }
}
