import { SlicePipe } from '@angular/common';
import { Component, OnInit, Inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';

@Component({
  selector: 'app-entity-form',
  templateUrl: './entity-form.component.html',
  styleUrls: ['./entity-form.component.css']
})
export class EntityFormComponent implements OnInit {
  Name: any;
  con_name: any;
  con_role: any;
  con_pone: any;
  cli_type: any;
  contactarray: any = [];
  address: any;
  types: any = [
    { "y": "Banks" },
    { "y": "Finance companies" },
    { "y": "Real Estate" },
    { "y": "Telecom" },
    { "y": "Others" },
  ];
  type: any = [
    { "y": "Existing" },
    { "y": "New" },
  ];
  typ: any = [
    { "y": "Primary office" },
    { "y": "Sister concern" },
    { "y": "Branch" },
    { "y": "Business Division" },
  ];
  form_type: any;
  uploadedFiles: any[] = [];
  constructor(
    private router: Router,
    @Inject(SESSION_STORAGE) private storage: StorageService,
  ) { }

  ngOnInit(): void {
    this.form_type = this.getFromLocal('Client_form')
  }
  cancel() {
      this.router.navigateByUrl('/Super_admin/EntityManagement');
  
  }
  addcontact() {

    if (this.con_name != undefined && this.con_name != '' && this.con_role != undefined && this.con_role != '' && this.con_pone != undefined && this.con_pone != '') {
      let obj = { "con_name": this.con_name, "con_role": this.con_role, "con_pone": this.con_pone, }
      this.contactarray.push(obj);
      this.con_name = undefined;
      this.con_role = undefined;
      this.con_pone = undefined;
    }
    else {
      alert("fill all the required fields")
    }
  }
  remove_contact(i) {
    this.contactarray.splice(i, 1);

  }
  onUpload(event) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
      console.log(this.uploadedFiles)
    }

  }
  saveInLocal(key, val): void {
    this.storage.set(key, val);
  }

  getFromLocal(key): any {
    return this.storage.get(key);
  }

}

