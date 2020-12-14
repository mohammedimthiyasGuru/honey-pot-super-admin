import { Component, OnInit, Inject } from '@angular/core';
import * as XLSX from 'xlsx';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import Swal from 'sweetalert2';
import { Router, RouterModule } from '@angular/router';

type AOA = any[][];
@Component({
  selector: 'app-allocationexcel',
  templateUrl: './allocationexcel.component.html',
  styleUrls: ['./allocationexcel.component.css']
})
export class AllocationexcelComponent implements OnInit {
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
  ) { }

  ngOnInit(): void {
  }
  onFileChange(evt: any) {
    console.log('this.data');
    const target: DataTransfer = <DataTransfer>(evt.target);
    if (target.files.length !== 1) throw new Error('Cannot use multiple files');
    const reader: FileReader = new FileReader();
    console.log('data');
    reader.onload = (e: any) => {
      console.log('data-1');
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];
      this.data = <AOA>(XLSX.utils.sheet_to_json(ws, { header: 1 }));
      console.log(this.data);
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
      console.log(this.check);
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
  acc_list() {
    window.scrollTo(0,0);
    this.router.navigateByUrl('/admin_panel/uploaded_list');
  
  }
  entry(){
    this.section = 2;
  }
}
