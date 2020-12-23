import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl = environment.apiUrl;
  imgUrl = environment.imageURL;
  constructor(private http: HttpClient) { }


  Activity_create(data) {
    return this.http.post<any>(this.apiUrl + 'activity/create',data);
  }
  forunlive1(data) {
    return this.http.post(this.apiUrl + 'livedoctors/edits', data);
  }
}
