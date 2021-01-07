import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../../../api.service';
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  userrole_list: any = [];
  usertype_list: any = [];

  usertype: any;
  user_name: any;
  user_role: any;
  user_id: any;
  staff_id: any;
  mobile_no: any;
  whatsapp_no: any;
  landline_no: any;
  ext_no: any;
  office_email: any;
  person_email: any;
  linked_url: any;
  fb_url: any;
  website: any;
  current_address: any;
  current_box: any;
  current_pincode: any;
  home_address: any;
  home_box: any;
  home_pincode: any;
  photo: any;
  document_type: any;
  hr_reporting: any;
  product_reporting: any;
  addedby: any;

  Type: any;
  Country: any;
  Currency1: any;
  Short_code: any;
  System_code: any;
  Name: any;
  Website: any;
  email_id: any;
  Ho_Address: any;
  Office_Address: any;
  logo: any;

  ref_name: any;
  ref_email: any;
  ref_pone: any;
  ref_whats_pone: any;
  ref_lanline: any;
  ref_extension: any;
  ref_Staff_no: any;
  ref_Internal_ID: any;
  ref_Designation: any;
  ref_Reporting_to: any;
  ref_persons_array: any = [];

  Document_Type: any;
  Document_Name: any;
  Start_date: any;
  End_date: any;
  Document_link: any
  Documents_array: any = [];

  Account_No: any;
  IFSC: any;
  IBAN: any;
  Bank_Name: any;
  Branch: any;
  Bank_address: any;
  Bnak_Country: any;
  Bank_Currency: any;
  Swift_Code: any;
  Account_array: any = [];

  Validation: boolean;
  emailError: any;
  emailError1: any;
  emailErrorMsg: any;
  selectedimgae: any;
  @ViewChild('imgType', { static: false }) imgType: ElementRef;
  id: any = undefined;
  entity_data: any = undefined;
  entity: any;
  con_name: any;
  con_role: any;
  con_pone: any;
  cli_type: any;
  contactarray: any = [];
  address: any;

  Account_list: any = [];
  country: any = [];
  Reporting_to_list: any = [];
  State_l: any = [];
  State_l1: any = [];
  State: any;
  State1: any;
  Town_District: any;
  Town_District1: any;
  doct: any = [];
  Currency: any = [
    { "y": "INR" },
    { "y": "Real" },
    { "y": "Dinar" },
    { "y": "Dollar" },
  ]
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
  form_act: boolean = false;
  form_type: any;
  field_set: boolean = false;
  uploadedFiles: any[] = [];
  System_email_id: any;
  emailError0: any;
  Pincode: any;
  Pincode1: any;
  Pincode2: any;
  PO_Box: any;
  PO_Box1: any;
  PO_Box2: any;
  entity_all: any = [];
  currency_handling: any;
  ref_id: any;
  Doc_id: any;
  Acc_id: any;

  constructor(
    private router: Router,
    private _api: ApiService,
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private http: HttpClient,

  ) {


  }

  ngOnInit(): void {
    this.form_type = this.getFromLocal('Client_form')
    this.entity_data = this.getFromLocal('client_data');
    if (this.entity_data != undefined) {
      this.form_act = true;
    }

    this.user_type_list_get();
    this.user_role_list_get();
    this.reporting_to_get();
    this.doc_list_get();
    console.log(this.entity_data);
    this.set_field_data();

  }

  set_field_data() {
    if (this.entity_data != undefined) {
      console.log(this.entity_data);
      this.id = this.entity_data._id;
      // this.License = this.entity_data.no_of_lincenese;
      this.usertype = { 'y': this.entity_data.usertype };
      this.user_name = this.entity_data.user_name;
      this.user_role = { 'y': this.entity_data.user_role };
      this.user_id = this.entity_data.user_id;
      this.staff_id = this.entity_data.staff_id;
      this.mobile_no = this.entity_data.mobile_no;
      this.whatsapp_no = this.entity_data.whatsapp_no;
      this.landline_no = this.entity_data.landline_no;
      this.ext_no = this.entity_data.ext_no;
      this.office_email = this.entity_data.office_email;
      this.person_email = this.entity_data.person_email;
      this.linked_url = this.entity_data.linked_url;
      this.fb_url = this.entity_data.fb_url;
      this.website = this.entity_data.website;
      this.current_address = this.entity_data.current_address;
      this.current_box = this.entity_data.current_box;
      this.current_pincode = this.entity_data.current_pincode;
      this.home_address = this.entity_data.home_address;
      this.home_box = this.entity_data.home_box;
      this.home_pincode = this.entity_data.home_pincode;
      this.photo = this.entity_data.photo;
      this.Documents_array = this.entity_data.document_type;
    }
    else {
      this.field_set = true;
    }
  }

  user_type_list_get() {
    this._api.usertype_list().subscribe(
      (response: any) => {
        console.log(response);
        let list = response.Data.reverse();
        for (let i = 0; i < list.length; i++) {
          let obj = { 'y': list[i].usertype, '_id': list[i]._id };
          this.usertype_list.push(obj);
        }
        console.log(this.usertype_list);
      }
    );
  }
  user_role_list_get() {
    this._api.userrole_list().subscribe(
      (response: any) => {
        console.log(response);
        let list = response.Data.reverse();
        for (let i = 0; i < list.length; i++) {
          let obj = { 'y': list[i].userrole, '_id': list[i]._id };
          this.userrole_list.push(obj);
        }
        console.log(this.userrole_list);
      }
    );
  }
  reporting_to_get() {
    this._api.designation_type_list().subscribe(
      (response: any) => {
        console.log(response);
        let list = response.Data.reverse();
        for (let i = 0; i < list.length; i++) {
          let obj = { 'y': list[i].designation_type };
          this.Reporting_to_list.push(obj);
        }
        console.log(this.Reporting_to_list);
      }
    );
  }
  doc_list_get() {
    this._api.document_type_list().subscribe(
      (response: any) => {
        console.log(response);
        let list = response.Data.reverse();
        for (let i = 0; i < list.length; i++) {
          let obj = { 'y': list[i].document_type, '_id': list[i]._id };
          this.doct.push(obj);
        }
        console.log(this.doct);
      }
    );
  }
  edit() {
    this.form_act = false;
  }
  cancel() {
    this.router.navigateByUrl('admin_panel/Super_admin/EntityManagement');
    this.saveInLocal('Entity_data', undefined);
  }
  addcontact() {
    if (this.ref_name != undefined && this.ref_name != '' &&
      this.ref_email != undefined && this.ref_email != '' && this.emailError1 != true &&
      this.ref_pone != undefined && this.ref_pone != '' &&
      this.ref_whats_pone != undefined && this.ref_whats_pone != '' &&
      this.ref_lanline != undefined && this.ref_lanline != '' &&
      // this.ref_extension != undefined && this.ref_extension != '' &&
      // this.ref_Staff_no != undefined && this.ref_Staff_no != '' &&
      // this.ref_Internal_ID != undefined && this.ref_Internal_ID != '' &&
      this.ref_Designation != undefined && this.ref_Designation != '' &&
      this.ref_Reporting_to != undefined && this.ref_Reporting_to != '') {
      let obj = {
        "ref_name": this.ref_name,
        "ref_email": this.ref_email,
        "ref_pone": this.ref_pone,
        "ref_whats_pone": this.ref_whats_pone,
        "ref_lanline": this.ref_lanline,
        "ref_extension": this.ref_extension,
        "ref_Staff_no": this.ref_Staff_no,
        "ref_Internal_ID": this.ref_Internal_ID,
        "ref_Designation": this.ref_Designation.y,
        "ref_Reporting_to": this.ref_Reporting_to
      }
      this.ref_persons_array.push(obj);
      this.ref_name = undefined;
      this.ref_email = undefined;
      this.ref_pone = undefined;
      this.ref_whats_pone = undefined;
      this.ref_lanline = undefined;
      this.ref_extension = undefined;
      this.ref_Staff_no = undefined;
      this.ref_Internal_ID = undefined;
      this.ref_Designation = undefined;
      this.ref_Reporting_to = undefined;
      console.log(this.ref_name)
    }
    else {
      alert("fill all the required fields")
    }
  }
  remove_contact(i) {
    console.log(this.ref_persons_array);
    this.ref_persons_array = this.ref_persons_array.splice(i, 1);
    console.log(this.ref_persons_array);
    let a = {
      "_id": this.id,
      "contact_persons": this.ref_persons_array,

    };
    console.log(a);
    this._api.useradd_edit(a).subscribe(
      (response: any) => {
        console.log(response);
        if (response.Code === 200) {
          this.ref_persons_array = response.Data.contact_persons
          alert(response.Message);
        } else {
          alert(response.Message);
        }
      }
    );
  }


  adddocuments() {
    if (this.Document_Type != undefined && this.Document_Type != '' &&
      this.Document_Name != undefined && this.Document_Name != '' &&
      this.Start_date != undefined && this.Start_date != '' &&
      this.End_date != undefined && this.End_date != '' &&
      this.Document_link != undefined && this.Document_link != '') {
      let obj = {
        "Document_Type": this.Document_Type.y,
        "Document_Name": this.Document_Name,
        "Start_date": this.Start_date,
        "End_date": this.End_date,
        "Document_link": this.Document_link,
      }
      this.Documents_array.push(obj);
      this.Document_Type = undefined;
      this.Document_Name = undefined;
      this.Start_date = undefined;
      this.End_date = undefined;
      console.log(this.Documents_array)
    }
    else {
      alert("fill all the required fields")
    }
  }
  remove_doc(i) {
    this.Documents_array = this.Documents_array.splice(i, 1);
    let a = {
      "_id": this.id,
      "document_type": this.Documents_array,
    };
    console.log(a);
    this._api.useradd_edit(a).subscribe(
      (response: any) => {
        console.log(response);
        if (response.Code === 200) {
          alert(response.Message);
          this.Documents_array = response.Data.documents
        } else {
          alert(response.Message);
        }
      }
    );
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
  goToLink1(url: string) {
    window.open(url, "_blank");
  }
  emailValidator() {
    let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let emailcheck = reg.test(this.email_id);
    if (this.email_id === '' || this.email_id === undefined || this.email_id === null) {
      this.emailError = true;
      this.emailErrorMsg = 'Email Address Required.'
    } else if (!emailcheck) {
      this.emailError = true;
      this.emailErrorMsg = 'Enter Valid Email Address.'
    } else {
      this.emailError = false;
    }
  }
  emailValidator0() {
    let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let emailcheck = reg.test(this.System_email_id);
    if (this.System_email_id === '' || this.System_email_id === undefined || this.System_email_id === null) {
      this.emailError0 = true;
      this.emailErrorMsg = 'Email Address Required.'
    } else if (!emailcheck) {
      this.emailError0 = true;
      this.emailErrorMsg = 'Enter Valid Email Address.'
    } else {
      this.emailError0 = false;
    }
  }
  emailValidator1() {
    let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let emailcheck = reg.test(this.ref_email);
    if (this.ref_email === '' || this.ref_email === undefined || this.ref_email === null) {
      this.emailError1 = true;
      this.emailErrorMsg = 'Email Address Required.'
    } else if (!emailcheck) {
      this.emailError1 = true;
      this.emailErrorMsg = 'Enter Valid Email Address.'
    } else {
      this.emailError1 = false;
    }
  }
  emailChange(data) {
    //console.log(data);
    this.email_id = data;
    this.emailValidator();
  }
  emailChange0(data) {
    //console.log(data);
    this.System_email_id = data;
    this.emailValidator0();
  }
  emailChange1(data) {
    //console.log(data);
    this.ref_email = data;
    this.emailValidator1();
  }
  _keyPress(event: any) {
    const pattern = /[0-9\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
      event.preventDefault();

    }
  }

  fileupload(event) {
    console.log("this.width")
    this.selectedimgae = event.target.files[0];
    console.log(this.selectedimgae.size / 100000);
    let fr = new FileReader();
    fr.onload = () => { // when file has loaded
      var img = new Image();
      img.onload = () => {
        let width = img.width;
        let height = img.height;
        console.log(width, height);
        this.addfiles();
      };
      img.src = fr.result as string; // The data URL
    };
    fr.readAsDataURL(this.selectedimgae);
    // clear the value after upload
  }
  addfiles() {
    const fd = new FormData();
    fd.append('sampleFile', this.selectedimgae, this.selectedimgae.name);
    this.http.post('http://52.25.163.13:3000/upload', fd)
      .subscribe((res: any) => {
        console.log(res);
        this.photo = res.Data;
      });


  }

  Documentupload(event) {
    console.log("this.width")
    this.selectedimgae = event.target.files[0];
    console.log(this.selectedimgae.size / 100000);
    let fr = new FileReader();

    let d = this.selectedimgae.size / 100000;
    if (d < 10) {
      this.addDoc();
    }
    else {
      alert('Please upload the file below 1 MB');
      // this.imgType.nativeElement.value = "";
    }
    // clear the value after upload
  }
  addDoc() {
    const fd = new FormData();
    fd.append('sampleFile', this.selectedimgae, this.selectedimgae.name);
    this.http.post('http://52.25.163.13:3000/upload', fd)
      .subscribe((res: any) => {
        console.log(res);
        this.Document_link = res.Data;
      });


  }

  validation() {
    if (
      this.usertype == undefined || this.usertype == '' ||
      this.user_name == undefined || this.user_name == '' ||
      this.user_role == undefined || this.user_role == '' ||
      this.user_id == undefined || this.user_id == '' ||
      this.staff_id == undefined || this.staff_id == '' ||
      this.mobile_no == undefined || this.mobile_no == '' ||
      this.whatsapp_no == undefined || this.whatsapp_no == '' ||
      this.landline_no == undefined || this.landline_no == '' ||
      this.ext_no == undefined || this.ext_no == '' ||
      this.office_email == undefined || this.office_email == '' ||
      this.person_email == undefined || this.person_email == '' ||
      this.linked_url == undefined || this.linked_url == '' ||
      this.fb_url == undefined || this.fb_url == '' ||
      this.website == undefined || this.website == '' ||
      this.current_address == undefined || this.current_address == '' ||
      this.current_box == undefined || this.current_box == '' ||
      this.current_pincode == undefined || this.current_pincode == '' ||
      this.home_address == undefined || this.home_address == '' ||
      this.home_box == undefined || this.home_box == '' ||
      this.home_pincode == undefined || this.home_pincode == '' ||
      this.photo == undefined || this.photo == '') {
      this.Validation = false;
      console.log(this.Validation)

    }
    else {
      this.Validation = true;
      console.log(this.Validation);
      let a = {

        "usertype": this.usertype.y,
        "user_name": this.user_name,
        "user_role": this.user_role.y,
        "user_id": this.user_id,
        "staff_id": this.staff_id,
        "mobile_no": this.mobile_no,
        "whatsapp_no": this.whatsapp_no,
        "landline_no": this.landline_no,
        "ext_no": this.ext_no,
        "office_email": this.office_email,
        "person_email": this.person_email,
        "linked_url": this.linked_url,
        "fb_url": this.fb_url,
        "website": this.website,
        "current_address": this.current_address,
        "current_box": this.current_box,
        "current_pincode": this.current_pincode,
        "home_address": this.home_address,
        "home_box": this.home_box,
        "home_pincode": this.home_pincode,
        "photo": this.photo,
        "document_type": this.Documents_array,


      };
      console.log(a);
    }
  }

  create() {
    this.validation();
    if (this.Validation == false) {
      alert("Please enter valid inputs")
    } else {

      let a = {
        "usertype": this.usertype.y,
        "user_name": this.user_name,
        "user_role": this.user_role.y,
        "user_id": this.user_id,
        "staff_id": this.staff_id,
        "mobile_no": this.mobile_no,
        "whatsapp_no": this.whatsapp_no,
        "landline_no": this.landline_no,
        "ext_no": this.ext_no,
        "office_email": this.office_email,
        "person_email": this.person_email,
        "linked_url": this.linked_url,
        "fb_url": this.fb_url,
        "website": this.website,
        "current_address": this.current_address,
        "current_box": this.current_box,
        "current_pincode": this.current_pincode,
        "home_address": this.home_address,
        "home_box": this.home_box,
        "home_pincode": this.home_pincode,
        "photo": this.photo,
        "document_type": this.Documents_array,


      };
      console.log(a);
      this._api.useradd_create(a).subscribe(
        (response: any) => {
          console.log(response);
          if (response.Code === 200) {
            alert(response.Message);
            this.id = response.Data._id;
            this.entity_data = response.Data;
            this.form_act = true;
            this.set_field_data();
            console.log(this.id)
          } else {
            alert(response.Message);
          }
        }
      );
    }
  }
  update() {
    console.log(this.id)
    this.validation();
    if (this.Validation == false) {
      alert("Please enter valid inputs")
    } else {

      let a = {
        "_id": this.id,
        "usertype": this.usertype.y,
        "user_name": this.user_name,
        "user_role": this.user_role.y,
        "user_id": this.user_id,
        "staff_id": this.staff_id,
        "mobile_no": this.mobile_no,
        "whatsapp_no": this.whatsapp_no,
        "landline_no": this.landline_no,
        "ext_no": this.ext_no,
        "office_email": this.office_email,
        "person_email": this.person_email,
        "linked_url": this.linked_url,
        "fb_url": this.fb_url,
        "website": this.website,
        "current_address": this.current_address,
        "current_box": this.current_box,
        "current_pincode": this.current_pincode,
        "home_address": this.home_address,
        "home_box": this.home_box,
        "home_pincode": this.home_pincode,
        "photo": this.photo,
        "document_type": this.Documents_array,

      };
      console.log(a);
      this._api.useradd_edit(a).subscribe(
        (response: any) => {
          console.log(response);
          if (response.Code === 200) {
            alert(response.Message);
            this.id = response.Data._id;
            this.entity_data = response.Data;
            this.set_field_data();
            console.log(this.id)
            this.form_act = true;
          } else {
            alert(response.Message);
          }
        }
      );
    }
  }
  create_ref() {
    this.addcontact();
    if (this.ref_persons_array.length == 0) {
      alert("Please enter valid inputs")
    } else {
      let a = {
        "_id": this.id,
        "contact_persons": this.ref_persons_array,
      };
      console.log(a);
      this._api.useradd_edit(a).subscribe(
        (response: any) => {
          console.log(response);
          if (response.Code === 200) {
            alert(response.Message);
            this.ref_persons_array = response.Data.contact_persons
          } else {
            alert(response.Message);
          }
        }
      );
    }
  }
  edit_ref(arr, i) {
    this.ref_id = i
    this.ref_name = arr.ref_name
    this.ref_email = arr.ref_email
    this.ref_pone = arr.ref_pone
    this.ref_whats_pone = arr.ref_whats_pone
    this.ref_lanline = arr.ref_lanline
    this.ref_extension = arr.ref_extension
    this.ref_Staff_no = arr.ref_Staff_no
    this.ref_Internal_ID = arr.ref_Internal_ID
    this.ref_Designation = { 'y': arr.ref_Designation }
    this.ref_Reporting_to = arr.ref_Reporting_to
    console.log(this.ref_Designation)
  }
  update_ref() {
    if (this.ref_name != undefined && this.ref_name != '' &&
      this.ref_email != undefined && this.ref_email != '' && this.emailError1 != true &&
      this.ref_pone != undefined && this.ref_pone != '' &&
      this.ref_whats_pone != undefined && this.ref_whats_pone != '' &&
      this.ref_lanline != undefined && this.ref_lanline != '' &&
      // this.ref_extension != undefined && this.ref_extension != '' &&
      // this.ref_Staff_no != undefined && this.ref_Staff_no != '' &&
      // this.ref_Internal_ID != undefined && this.ref_Internal_ID != '' &&
      this.ref_Designation != undefined && this.ref_Designation != '' &&
      this.ref_Reporting_to != undefined && this.ref_Reporting_to != '') {
      let obj = {
        "ref_name": this.ref_name,
        "ref_email": this.ref_email,
        "ref_pone": this.ref_pone,
        "ref_whats_pone": this.ref_whats_pone,
        "ref_lanline": this.ref_lanline,
        "ref_extension": this.ref_extension,
        "ref_Staff_no": this.ref_Staff_no,
        "ref_Internal_ID": this.ref_Internal_ID,
        "ref_Designation": this.ref_Designation.y,
        "ref_Reporting_to": this.ref_Reporting_to
      }
      this.ref_persons_array[this.ref_id] = obj;
      this.ref_name = undefined;
      this.ref_email = undefined;
      this.ref_pone = undefined;
      this.ref_whats_pone = undefined;
      this.ref_lanline = undefined;
      this.ref_extension = undefined;
      this.ref_Staff_no = undefined;
      this.ref_Internal_ID = undefined;
      this.ref_Designation = undefined;
      this.ref_Reporting_to = undefined;
      console.log(this.ref_name)
      this.ref_id = undefined;
      let a = {
        "_id": this.id,
        "contact_persons": this.ref_persons_array,
      };
      console.log(a);
      this._api.useradd_edit(a).subscribe(
        (response: any) => {
          console.log(response);
          if (response.Code === 200) {
            alert(response.Message);
            this.ref_persons_array = response.Data.contact_persons
          } else {
            alert(response.Message);
          }
        }
      );

    }
    else {
      alert("fill all the required fields")
    }
  }
  create_Doc() {
    this.adddocuments();
    if (this.Documents_array.length == 0) {
      alert("Please enter valid inputs")
    } else {
      let a = {
        "_id": this.id,
        "document_type": this.Documents_array,
      };
      console.log(a);
      this._api.useradd_edit(a).subscribe(
        (response: any) => {
          console.log(response);
          if (response.Code === 200) {
            this.Documents_array = response.Data.documents,
              alert(response.Message);
          } else {
            alert(response.Message);
          }
        }
      );
    }
  }
  edit_Doc(arr, i) {
    this.Doc_id = i;
    this.Document_Type = { 'y': arr.Document_Type }
    this.Document_Name = arr.Document_Name
    this.Start_date = arr.Start_date
    this.End_date = arr.End_date
    this.Document_link = arr.Document_link
  }
  update_Doc() {
    if (this.Document_Type != undefined && this.Document_Type != '' &&
      this.Document_Name != undefined && this.Document_Name != '' &&
      this.Start_date != undefined && this.Start_date != '' &&
      this.End_date != undefined && this.End_date != '' &&
      this.Document_link != undefined && this.Document_link != '') {
      let obj = {
        "Document_Type": this.Document_Type.y,
        "Document_Name": this.Document_Name,
        "Start_date": this.Start_date,
        "End_date": this.End_date,
        "Document_link": this.Document_link,
      }
      this.Documents_array[this.Doc_id] = obj;
      this.Document_Type = undefined;
      this.Document_Name = undefined;
      this.Start_date = undefined;
      this.End_date = undefined;
      console.log(this.Documents_array)
      this.Doc_id = undefined;
      let a = {
        "_id": this.id,
        "document_type": this.Documents_array,
      };
      console.log(a);
      this._api.useradd_edit(a).subscribe(
        (response: any) => {
          console.log(response);
          if (response.Code === 200) {
            this.Documents_array = response.Data.documents,
              alert(response.Message);
          } else {
            alert(response.Message);
          }
        }
      );
    }
    else {
      alert("fill all the required fields")
    }
  }
 
  can() {
    this.form_act = true;
    this.ngOnInit();
  }
}