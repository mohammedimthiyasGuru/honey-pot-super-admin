import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  client_name: any;
  business_divi: any;
  product_name: any;
  profolio: any;
  type: any;
;
  searchQR: any;
  id: any;
  edit_f: boolean = false;
  client_list: any = [];
  product_list: any = [];
  profolio_list: any = [];

    rows:any = [{ type: "Dog", name: "dog1" },
    { type: "Cat", name: "cat1" },
    { type: "Cat", name: "cat1" },
    { type: "Cat", name: "cat1" },
    { type: "Cat", name: "cat1" },
    { type: "Cat", name: "cat1" },
    { type: "Cat", name: "cat1" },
    { type: "Cat", name: "cat1" },
    { type: "Cat", name: "cat1" },
    { type: "Cat", name: "cat1" },
    { type: "Cat", name: "cat1" },
    { type: "Cat", name: "cat1" }];
    searchQR:any;
    data:any = {
      labels: ['A','B','C'],
      datasets: [
          {
              data: [300, 50, 100],
              backgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
              ],
              hoverBackgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
              ]
          }]    
      };
    

      data1:any = {
        labels: ['January', 'February', 'March',],
        datasets: [
            {
                label: 'My First dataset',
                backgroundColor: '#42A5F5',
                borderColor: '#1E88E5',
                data: [65, 59, 80,]
            },
            {
                label: 'My Second dataset',
                backgroundColor: '#9CCC65',
                borderColor: '#7CB342',
                data: [28, 48, 40,]
            }
        ]
    }

    data2:any= {
      labels: ['A','B','C'],
      datasets: [
          {
              data: [300, 50, 100],
              backgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
              ],
              hoverBackgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
              ]
          }]    
      };
  constructor(private _api:ApiService) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this._api.portfolio_type_list().subscribe(
        (response: any) => {
          console.log(response);
          let list = response.Data.reverse();
          for (let i = 0; i < list.length; i++) {
            let obj = { 'y': list[i].portfolio_type };
            this.profolio_list.push(obj);
          }
  
          console.log(this.profolio_list);
        }
      );
  }

}
