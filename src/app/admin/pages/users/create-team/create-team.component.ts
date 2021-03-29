import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AgGridAngular } from 'ag-grid-angular';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.css']
})
export class CreateTeamComponent implements OnInit {
  @ViewChild('agGrid',{static:false}) agGrid: AgGridAngular;
  @ViewChild('agGrid2',{static:false}) agGrid2: AgGridAngular;
  TeamcolumnDefs = [
    {headerName: 'ID', field: '_id', width: 250, checkboxSelection: true,headerCheckboxSelection: true,sortable: true, filter: true},
    {headerName: 'Team Name', field: 'teamname', resizable: true, sortable: true, filter: true},
    {headerName: 'Created At', field: 'createdAt', resizable: true, sortable: true, filter: true},
    {headerName: 'Update At', field: 'updatedAt', resizable: true, sortable: true, filter: true},
    {headerName: 'Status', field: 'status', sortable: true, filter: true},
    {headerName: 'Options', width: 120,cellRenderer: function(params) {
      return "";
    }},
  ];

  TeammemberscolumnDefs = [
    {headerName: 'ID', field: '_id', width: 250, checkboxSelection: true,headerCheckboxSelection: true,sortable: true, filter: true},
    {headerName: 'Team ID', field: 'teamid', resizable: true, sortable: true, filter: true},
    {headerName: 'Team Name', field: 'teamname', resizable: true, sortable: true, filter: true},
    {headerName: 'Designation', field: 'designation', resizable: true, sortable: true, filter: true},
    {headerName: 'Report To', field: 'reportto', resizable: true, sortable: true, filter: true},
    {headerName: 'Member Name', field: 'membername', resizable: true, sortable: true, filter: true},
    {headerName: 'Member ID', field: 'memberid', resizable: true, sortable: true, filter: true},
    {headerName: 'Member Email', field: 'memberemail', resizable: true, sortable: true, filter: true},
    {headerName: 'Created At', field: 'createdAt', resizable: true, sortable: true, filter: true},
    {headerName: 'Update At', field: 'updatedAt', resizable: true, sortable: true, filter: true},
    {headerName: 'Status', field: 'status', sortable: true, filter: true},
    {headerName: 'Options', width: 120,cellRenderer: function(params) {
      return "";
    }},
  ];
  
  TeamForm: FormGroup;
  banknameList: any[];
  addmode: boolean;
  editmode: boolean;
  TeamList: any;
  fieldvisitCodeList: any;
  TeammembersForm: FormGroup;
  TeamMembersList: any;
  Designation_details1: any[];
  Designation_details2: any[];
  user_list_details: any;
  report_to_id: any;
  User_details1: any[];
  report_to: any;
  report_to_design: any;
  company_name: any;

  constructor(private formBuilder:FormBuilder, private _api:ApiService) { 
    this.TeamForm = this.formBuilder.group({
      _id:[''],
      teamname:['',Validators.required],
      status:['',Validators.required]
    });
    this.TeammembersForm = this.formBuilder.group({
      _id:[''],
      teamname: ['', Validators.required],
      teamid: ['', Validators.required],
      designation: ['', Validators.required],
      reportto: ['', Validators.required],
      membername: ['', Validators.required],
      memberid: ['', Validators.required],
      memberemail: ['', Validators.required],
      status: ['', Validators.required]            
    });
  }

  ngOnInit(): void {

    this.addmode = true;
    this.editmode = false;

    this._api.getlist_new_team().subscribe(data=>{
      if (data['Code'] == 200) {
        this.TeamList = data['Data'];
      } else {
        this.TeamList = [];
      }
    });
    
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
      "bankname" : "",
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



  addteam(){
    if (this.TeamForm.valid) {
      this._api.create_new_team(this.TeamForm.value).subscribe(data=>{
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

  editteam(){
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map(node => node.data );
    if (selectedData.length == 1) {
      this.addmode = false;
      this.editmode = true;
      this.TeamForm.patchValue({
        _id:selectedData[0]._id,
        teamname:selectedData[0].teamname,
        status:selectedData[0].status
      });
    } else if (selectedData.length > 1) {
      alert("Select Only one Record");
    } else {
      alert("Select atleast one Record");
    }
    
  }

  updateteam(){
    if (this.TeamForm.valid) {
      this._api.update_new_team(this.TeamForm.value).subscribe(data=>{
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

  deleteteam(){
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map(node => node.data );
    if (selectedData.length >= 1) {
      for (let i = 0; i < selectedNodes.length; i++) {
        this._api.delete_new_team(selectedData[i]._id).subscribe(data => {
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
    this.TeamForm.reset();
  }

  onreloadPage(){
    this.cancel();
    this.cancelteammembers();
    this._api.getlist_new_team().subscribe(data=>{
      if (data['Code'] == 200) {
        this.TeamMembersList = data['Data'];
      } else {
        this.TeamMembersList = [];
      }
    });

    this._api.getlist_new_team().subscribe(data=>{
      if (data['Code'] == 200) {
        this.TeamList = data['Data'];
      } else {
        this.TeamList = [];
      }
    });
  }


  addteammembers(){
    if (this.TeammembersForm.valid) {
      this._api.create_new_teammembers(this.TeammembersForm.value).subscribe(data=>{
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

  editteammembers(){
    const selectedNodes = this.agGrid2.api.getSelectedNodes();
    const selectedData = selectedNodes.map(node => node.data );
    if (selectedData.length == 1) {
      this.addmode = false;
      this.editmode = true;
      this.TeammembersForm.patchValue({
        _id:selectedData[0]._id,
        teamname: selectedData[0].teamname,
        teamid: selectedData[0].teamid,
        designation: selectedData[0].designation,
        reportto: selectedData[0].reportto,
        membername: selectedData[0].membername,
        memberid: selectedData[0].memberid,
        memberemail: selectedData[0].memberemail,
        status: selectedData[0].status,
      });
    } else if (selectedData.length > 1) {
      alert("Select Only one Record");
    } else {
      alert("Select atleast one Record");
    }
    
  }

  updateteammembers(){
    if (this.TeamForm.valid) {
      this._api.update_new_team(this.TeammembersForm.value).subscribe(data=>{
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

  deleteteammembers(){
    const selectedNodes = this.agGrid2.api.getSelectedNodes();
    const selectedData = selectedNodes.map(node => node.data );
    if (selectedData.length >= 1) {
      for (let i = 0; i < selectedNodes.length; i++) {
        this._api.delete_new_team(selectedData[i]._id).subscribe(data => {
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

  cancelteammembers(){
    this.addmode = true;
    this.editmode = false;
    this.TeammembersForm.reset();
  }


}
