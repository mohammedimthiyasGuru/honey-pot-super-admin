import { SlicePipe } from '@angular/common';
import { Component, OnInit, Inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';

@Component({
  selector: 'app-honey-pot-client-detail-form',
  templateUrl: './honey-pot-client-detail-form.component.html',
  styleUrls: ['./honey-pot-client-detail-form.component.css']
})
export class HoneyPotClientDetailFormComponent implements OnInit {
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
    if(this.form_type == "client"){
      this.router.navigateByUrl('/admin_panel/Clients');
    }
    else if(this.form_type == "product"){
      this.router.navigateByUrl('/admin_panel/Product');
    }
    else if(this.form_type == "document"){
      this.router.navigateByUrl('/admin_panel/Document');
    }
    else if(this.form_type == "bucket"){
      this.router.navigateByUrl('/admin_panel/Bucket');
    }
   
    
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
