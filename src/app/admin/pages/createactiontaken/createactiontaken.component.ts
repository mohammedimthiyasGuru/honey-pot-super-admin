import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AgGridAngular } from 'ag-grid-angular';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-createactiontaken',
  templateUrl: './createactiontaken.component.html',
  styleUrls: ['./createactiontaken.component.css']
})
export class CreateactiontakenComponent implements OnInit {

  @ViewChild('agGrid',{static:false}) agGrid: AgGridAngular;
  ActionsTakencolumnDefs = [
    {headerName: 'ID', field: '_id', width: 250, checkboxSelection: true,headerCheckboxSelection: true,sortable: true, filter: true},
    {headerName: 'Action Taken Name', field: 'actiontaken_name', resizable: true, sortable: true, filter: true},
    {headerName: 'Bank ID', field: 'bank_id', resizable: true, sortable: true, filter: true},
    {headerName: 'Created At', field: 'createdAt', resizable: true, sortable: true, filter: true},
    {headerName: 'Update At', field: 'updatedAt', resizable: true, sortable: true, filter: true},
    {headerName: 'Status', field: 'status', sortable: true, filter: true},
    {headerName: 'Options', width: 120,cellRenderer: function(params) {
      return "";
    }},
  ];
  
  actionstakenForm: FormGroup;
  banknameList: any[];
  addmode: boolean;
  editmode: boolean;
  actionstakenList: any;

  constructor(private formBuilder:FormBuilder, private _api:ApiService) { 
    this.actionstakenForm = this.formBuilder.group({
      _id:[''],
      bank_id:['',Validators.required],
      actiontaken_name:['',Validators.required],
      status:['',Validators.required]
    });
  }

  ngOnInit(): void {

    this.addmode = true;
    this.editmode = false;

    this._api.getlist_actionstaken().subscribe(data=>{
      if (data['Code'] == 200) {
        this.actionstakenList = data['Data'];
      } else {
        this.actionstakenList = [];
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
    if (this.actionstakenForm.valid) {
      this._api.create_actionstaken(this.actionstakenForm.value).subscribe(data=>{
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
      this.actionstakenForm.patchValue({
        _id:selectedData[0]._id,
        bank_id:selectedData[0].bank_id,
        actiontaken_name:selectedData[0].actiontaken_name,
        status:selectedData[0].status
      });
    } else if (selectedData.length > 1) {
      alert("Select Only one Record");
    } else {
      alert("Select atleast one Record");
    }
    
  }

  updatebcode(){
    if (this.actionstakenForm.valid) {
      this._api.update_actionstaken(this.actionstakenForm.value).subscribe(data=>{
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
        this._api.delete_actionstaken(selectedData[i]._id).subscribe(data => {
          if (data['Code'] == 200) {
            this.onreloadPage();
          } else {
            alert(data['Message']);
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
    this.actionstakenForm.reset();
  }

  onreloadPage(){
    this.cancel();
    this._api.getlist_actionstaken().subscribe(data=>{
      if (data['Code'] == 200) {
        this.actionstakenList = data['Data'];
      } else {
        this.actionstakenList = [];
      }
    });
  }
}
