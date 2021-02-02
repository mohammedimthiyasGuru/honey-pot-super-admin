import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import * as XLSX from 'xlsx';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import Swal from 'sweetalert2';
import { Router, RouterModule } from '@angular/router';
import { ApiService } from '../../../../api.service';


type AOA = any[][];
@Component({
  selector: 'app-allocationexcel',
  templateUrl: './allocationexcel.component.html',
  styleUrls: ['./allocationexcel.component.css']
})
export class AllocationexcelComponent implements OnInit {

  @ViewChild('fileControl') fileControl: ElementRef;
  Table_header : any ;

  final_header_excel : any = [];
  final_save_fields : any = [];
  final_not_match : any = [];


  Bank_list_gets : any;
  product_list_gets  : any;
  portfolio_list_gets  : any;
  saved_Fields = [];
  missed_datas = [];


  ErrorShow: boolean = true;
  Error: any = [];
  displayMaximizable: boolean = false;
  data: AOA = [];
  wopts: XLSX.WritingOptions = { bookType: 'xlsx', type: 'array' };
  fileName: string = 'SheetJS.xlsx';
  file: any;
  arrayBuffer: any;
  filelist: any;
  check: any = 0;
  checking: any;
  displayPosition: any;
  displayPosition1: any;
  displayPosition2 :boolean = false;

  Bank_list_type : any;
  product_list_type : any;
  portfolio_list_type : any;
  booleans = false;


  Bank_list : any = [];
  product_list :  any = [];
  portfolio_list :  any = [];



  types: any = [
    { "y": "Banks" },
    { "y": "Finance companies" },
    { "y": "Real Estate" },
    { "y": "Telecom" },
    { "y": "Others" },
  ];
  cli_type:any;
  section:any=1;
  constructor(
    private router: Router,
    private _api: ApiService,
    @Inject(SESSION_STORAGE) private storage: StorageService
  ) {
    this.Bank_list_get();
    this.product_list_get();
    this.portfolio_list_get();
   }

  ngOnInit(): void {
  }
  onFileChange(evt: any) {

    const target: DataTransfer = <DataTransfer>(evt.target);
    if (target.files.length !== 1) throw new Error('Cannot use multiple files');
    const reader: FileReader = new FileReader();

    reader.onload = (e: any) => {

      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];
      this.data = <AOA>(XLSX.utils.sheet_to_json(ws, { header: 1 }));
      console.log("excel data", this.data);
      this.Table_header = this.data[0];

      this.final_header_excel = [];
      this.final_save_fields = [];
      console.log(this.Table_header);
      console.log(this.saved_Fields);
      for(let a = 0 ; a < this.Table_header.length ; a ++){
       var check = 0;
       if(this.saved_Fields.length == 0){
        let c = {
          final_not_match : this.Table_header[a],
          final_not_index : a,
          saved_data : this.Table_header[a],
          saved_data_index : a
        }
        this.final_not_match.push(c) ;
       } else {
        for(let b = 0 ; b < this.saved_Fields.length; b++){
          if(this.Table_header[a] == this.saved_Fields[b].fields){
            check = 1;
            console.log("Check in");
              let c = {
                table_head : this.Table_header[a],
                table_head_index : a,
                saved_data : this.saved_Fields[b].fields,
                saved_data_index : b
              }
              this.final_header_excel.push(c);
          }
          if(b == this.saved_Fields.length - 1){
            if(check == 0){
              let c = {
                final_not_match : this.Table_header[a],
                final_not_index : a,
                saved_data : this.saved_Fields[b].fields,
                saved_data_index : b
              }
              this.final_not_match.push(c);
            }
          }
        }
      }
        if(a == this.Table_header.length -1){
          console.log(this.final_not_match);
          console.log(this.final_header_excel);
          console.log(this.final_save_fields);
          var a1 = this.saved_Fields;
          var a2 = this.final_header_excel;
          const results = a1.filter(({ fields: id1 }) => !a2.some(({ table_head: id2 }) => id2 === id1));
          console.log("Resulated adf",results);
          this.missed_datas = results;
          if(this.missed_datas.length) {
            let datas =[];
            this.missed_datas.forEach(element => {
              datas.push(element.fields);
            })
            Swal.fire({
              title: 'Missing fields',
              text: datas.toString(),
              icon: 'warning',
              html: `<ul><li>${datas.toString()}</li></ul>`
            })
          }
        }
      }
    };
    if (this.Error.length != 0) {
      this.ErrorShow = false;
    }
    reader.readAsBinaryString(target.files[0]);
    this.section = 3;
  }







  export(): void {
    /* generate worksheet */
    const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(this.data);
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    /* save to file */
    XLSX.writeFile(wb, this.fileName);
  }

  goback() {
    this.section = 1;
  }
  closeExcel() {
    this.fileControl.nativeElement.value = null;
    this.section = 2;
     this.final_not_match = [];
     this.final_header_excel = [];
     this.final_save_fields = [];
  }
  showPositionDialog() {
    this.displayPosition = true;
    this.displayPosition1 = false;
  }
  showPositionDialog1() {
    this.displayPosition1 = true;
  }
  Assign() {
    this.displayPosition1 = true;
    this.checking = setInterval(() => {
      this.check++;

      if (this.check == 4) {
        clearInterval(this.checking);
      }
    }, 2000);

  }
  list() {
    this.router.navigateByUrl('admin_panel/userflow/allocationsingle')
  }
  Field_mapping(){
    this.router.navigateByUrl('admin_panel/Field_mapping')
  }
  field_form() {
    this.router.navigateByUrl('/admin_panel/fieldset')
  }
  cancel() {
    this.router.navigateByUrl('/admin_panel/Clients')
  }

  bulk_upload() {
    this.displayPosition2 = true;
    this.saveInLocal("final_not_match", this.final_not_match);
  }

  saveInLocal(key, val): void {
    this.storage.set(key, val);
  }

  getFromLocal(key): any {
    return this.storage.get(key);
  }

  acc_list() {
    window.scrollTo(0,0);
    this.router.navigateByUrl('/admin_panel/uploaded_list');

  }
  entry(){
    this.fetch_field_list();
  }


  Bank_list_get() {
    this._api.client_list().subscribe(
      (response: any) => {
        let list = response.Data.reverse();
        for (let i = 0; i < list.length; i++) {
          let obj = { "y": list[i].Clinet_name};
          this.Bank_list.push(obj);
        }

      }
    );
  }

  product_list_get() {
    this._api.product_type_list().subscribe(
      (response: any) => {

        let list = response.Data.reverse();
        for (let i = 0; i < list.length; i++) {
          let obj = { "y": list[i].product_type};
          this.product_list.push(obj);
        }

      }
    );
  }


  portfolio_list_get() {
    this._api.portfolio_type_list().subscribe(
      (response: any) => {

        let list = response.Data.reverse();
        for (let i = 0; i < list.length; i++) {
          let obj = { "y": list[i].portfolio_type};
          this.portfolio_list.push(obj);
        }

        this.booleans = true;
      }
    );
  }


  fetch_field_list() {
    this.ngOnInit();
    console.log(this.Bank_list_gets);
    if(this.Bank_list_gets ==  undefined){
      Swal.fire('Select Bank type');
    }else if(this.product_list_gets ==  undefined){
      Swal.fire('Select Product type');
    }else if(this.portfolio_list_gets ==  undefined){
      Swal.fire('Select Portfolio type');
    } else {
      this.section = 2;
      let a = {
        bank : this.Bank_list_gets.y,
        product : this.product_list_gets.y,
        portfolio : this.portfolio_list_gets.y,
      }
      this.saveInLocal("fields_mapping_fetch",a);
      this._api.fields_mapping_fetch(a).subscribe(
        (response: any) => {
          if(response.Code === 404){
            Swal.fire('No Data Found');
            this.saved_Fields = [];
          }else{
            this.saved_Fields = response.Data[0].fields_details;
            console.log(this.saved_Fields);
          }
        }
      );
    }





    // console.log(this.Bank_list_gets.y);
    // console.log(this.product_list_gets.y);
    // console.log(this.portfolio_list_gets.y);




  }


}



