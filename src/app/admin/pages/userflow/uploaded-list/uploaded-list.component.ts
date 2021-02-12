import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { ApiService } from '../../../../api.service';
// import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import Swal from 'sweetalert2';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-uploaded-list',
  templateUrl: './uploaded-list.component.html',
  styleUrls: ['./uploaded-list.component.css']
})
export class UploadedListComponent implements OnInit {
  displayPosition: boolean;
  rows = [];
  searchQR: any;
  value1: any;
  rangeValues: number[] = [0,100];

  Finals_excel : any;

  Excel_Datas :  any;
  saved_Fields : any;
  constructor(
    private router: Router,
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private _api: ApiService,
    // private router: Router
  ) { }



  ngOnInit(): void {
    this.rows = [{ type: "Dog", name: "dog1" },
    { type: "Cat", name: "cat1" },
    { type: "Cat", name: "cat1" },
    { type: "Cat", name: "cat1" },
    ]






    this.Excel_Datas = this.getFromLocal("excel_final");
    let fields_mapping_fetch = this.getFromLocal("fields_mapping_fetch");
    console.log(this.Excel_Datas);

    this._api.fields_mapping_fetch(fields_mapping_fetch).subscribe(
      (response: any) => {
        if(response.Code === 404){
          Swal.fire('No Data Found');
          this.saved_Fields = [];
        }else{
          this.saved_Fields = response.Data[0].fields_details;
          // console.log(this.saved_Fields);
          this.saved_Fields = this.saved_Fields.reverse();
          var datas = [];
          var d = new Date();
          var n = d.getTime();
          for(let b = 0 ;  b < this.Excel_Datas.length ; b ++){
            this.Excel_Datas[b].push(false);
            var object = {};
            object["insert_id"] = n + b ;
          for(let a  = 0 ; a < this.saved_Fields.length ; a ++)
          {
            object[this.saved_Fields[a].fields] = this.Excel_Datas[b][a];
            if(a == this.saved_Fields.length - 1){
              datas.push(object);
            }
          }
            if(b == this.Excel_Datas.length - 1){
               console.log(datas);
               this.Finals_excel = datas;
          }
          }
        }
      }
    );



  }


  saveInLocal(key, val): void {
    this.storage.set(key, val);
  }

  getFromLocal(key): any {
    return this.storage.get(key);
  }

  client_form() {
    // this.router.navigateByUrl('/admin_panel/client-form')
  }
  profile() {
    // this.router.navigateByUrl('/admin_panel/Client_profile')
  }

  onSelect(status,datas,index){
   console.log(status,datas,index);






  }



  showPositionDialog() {
    this.displayPosition = true;
}
cus360(){
  // this.router.navigateByUrl('/admin_panel/user/createuser')
}
}
