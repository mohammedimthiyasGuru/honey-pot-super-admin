import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AgGridAngular } from 'ag-grid-angular';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-createbankcode',
  templateUrl: './createbankcode.component.html',
  styleUrls: ['./createbankcode.component.css']
})
export class CreatebankcodeComponent implements OnInit {

  @ViewChild('agGrid',{static:false}) agGrid: AgGridAngular;
  BankCodecolumnDefs = [
    {headerName: 'ID', field: '_id', width: 250, checkboxSelection: true,headerCheckboxSelection: true,sortable: true, filter: true},
    {headerName: 'Bank ID', field: 'bank_id', resizable: true, sortable: true, filter: true},
    {headerName: 'Bank CODE', field: 'bcode', resizable: true, sortable: true, filter: true},
    {headerName: 'Created At', field: 'createdAt', resizable: true, sortable: true, filter: true},
    {headerName: 'Update At', field: 'updatedAt', resizable: true, sortable: true, filter: true},
    {headerName: 'Status', field: 'status', sortable: true, filter: true},
    {headerName: 'Options', width: 120,cellRenderer: function(params) {
      return "";
    }},
  ];

  bankcodeForm: FormGroup;
  bankCodeList: any[];
  banknameList: any;
  editmode: boolean;
  addmode: boolean;

  constructor(private formBuilder:FormBuilder, private _api:ApiService) { 
    this.bankcodeForm = this.formBuilder.group({
      _id:[''],
      bank_id:['',Validators.required],
      bcode:['',Validators.required],
      status:['',Validators.required]
    });
  }

  ngOnInit(): void {
    this.addmode = true;
    this.editmode = false;

    this._api.getlist_bank_code().subscribe(data=>{
      if (data['Code'] == 200) {
        this.bankCodeList = data['Data'];
      } else {
        this.bankCodeList = [];
      }
    });

    this._api.user_details_list().subscribe(
      (response: any) => {
        console.log(response);
        this.banknameList = [];
       var hash = response.Data.reduce((p,c) => (p[c.bankname] ? p[c.bankname].push(c) : p[c.bankname] = [c],p) ,{});
       var  newData = Object.keys(hash).map(k => ({color: k, car: hash[k]}));
       console.log(newData);
        for(let a = 0 ; a < newData.length; a ++){
          let x =  { 'y': newData[a].color}
          this.banknameList.push(x);
        }

      }
    );
  }

  addbcode(){
    if (this.bankcodeForm.valid) {
      this._api.create_bank_code(this.bankcodeForm.value).subscribe(data=>{
        if (data['Code'] == 200) {
          alert(data['Message']);
          this.onreloadPage();
        } else {
          alert(data['Message']);
        }
      });
    } else {
      alert("Please Fill all fields");
    }
  }

  editbcode(){
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map(node => node.data );
    if (selectedData.length == 1) {
      this.addmode = false;
      this.editmode = true;
      this.bankcodeForm.patchValue({
        _id:selectedData[0]._id,
        bank_id:selectedData[0].bank_id,
        bcode:selectedData[0].bcode,
        status:selectedData[0].status
      });
    } else if (selectedData.length > 1) {
      alert("Select Only one Record");
    } else {
      alert("Select atleast one Record");
    }
    
  }

  updatebcode(){
    if (this.bankcodeForm.valid) {
      this._api.update_bank_code(this.bankcodeForm.value).subscribe(data=>{
        if (data['Code'] == 200) {
          alert(data['Message']);
          this.onreloadPage();
        } else {
          alert(data['Message']);
        }
      });
    } else {
      alert("Please Fill all fields");
    }
  }

  deletebcode(){
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map(node => node.data );
    if (selectedData.length >= 1) {
      for (let i = 0; i < selectedNodes.length; i++) {
        this._api.delete_bank_code(selectedData[i]._id).subscribe(data => {
          if (data['Code'] == 200) {
            this.onreloadPage();
          } else {
            
          }
        });
      }
      
    } else {
      alert("Select atleast one Record");
    }
  }

  cancel(){
    this.addmode = true;
    this.editmode = false;
    this.bankcodeForm.reset();
  }

  onreloadPage(){
    this.cancel();
    this._api.getlist_bank_code().subscribe(data=>{
      if (data['Code'] == 200) {
        this.bankCodeList = data['Data'];
      } else {
        this.bankCodeList = [];
      }
    });
  }

}
