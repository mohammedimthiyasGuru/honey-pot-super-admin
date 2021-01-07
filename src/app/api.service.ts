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
  
  login(data){
    return this.http.post(this.apiUrl + 'activity/login', data);
  }
  Forgot_password(data){
    return this.http.post(this.apiUrl + 'activity/forgotpassword', data);
  }
  entity_create(data) {
    return this.http.post(this.apiUrl + 'entity_user/create', data);
  }
  entity_edit(data) {
    return this.http.post(this.apiUrl + 'entity_user/edit', data);
  }
  entity_list() {
    return this.http.get<any>(this.apiUrl + 'entity_user/getlist' );
  }
  entity_delete(data) {
    return this.http.post(this.apiUrl + 'entity_user/delete', data);
  }

  client_create(data) {
    return this.http.post(this.apiUrl + 'client_details/create', data);
  }
  client_edit(data) {
    return this.http.post(this.apiUrl + 'client_details/edit', data);
  }
  client_list() {
    return this.http.get<any>(this.apiUrl + 'client_details/getlist' );
  }
  client_delete(data) {
    return this.http.post(this.apiUrl + 'client_details/delete', data);
  }

  client_type_add(data) {
    return this.http.post(this.apiUrl + 'client_type/create', data);
  }
  client_type_edit(data) {
    return this.http.post(this.apiUrl + 'client_type/edit', data);
  }
  client_type_delete(data) {
    return this.http.post(this.apiUrl + 'client_type/delete', data);
  }
  client_type_list() {
    return this.http.get<any>(this.apiUrl + 'client_type/getlist' );
  }

  portfolio_type_add(data) {
    return this.http.post(this.apiUrl + 'portfolio_type/create', data);
  }
  portfolio_type_edit(data) {
    return this.http.post(this.apiUrl + 'portfolio_type/edit', data);
  }
  portfolio_type_delete(data) {
    return this.http.post(this.apiUrl + 'portfolio_type/delete', data);
  }
  portfolio_type_list() {
    return this.http.get<any>(this.apiUrl + 'portfolio_type/getlist' );
  }
  product_type_add(data) {
    return this.http.post(this.apiUrl + 'product_type/create', data);
  }
  product_type_edit(data) {
    return this.http.post(this.apiUrl + 'product_type/edit', data);
  }
  product_type_delete(data) {
    return this.http.post(this.apiUrl + 'product_type/delete', data);
  }
  product_type_list() {
    return this.http.get<any>(this.apiUrl + 'product_type/getlist' );
  }
  state_details_add(data) {
    return this.http.post(this.apiUrl + 'state_details/create', data);
  }
  state_details_edit(data) {
    return this.http.post(this.apiUrl + 'state_details/edit', data);
  }
  state_details_delete(data) {
    return this.http.post(this.apiUrl + 'state_details/delete', data);
  }
  state_details_list() {
    return this.http.get<any>(this.apiUrl + 'state_details/getlist' );
  }
  document_type_add(data) {
    return this.http.post(this.apiUrl + 'document_type/create', data);
  }
  document_type_edit(data) {
    return this.http.post(this.apiUrl + 'document_type/edit', data);
  }
  document_type_delete(data) {
    return this.http.post(this.apiUrl + 'document_type/delete', data);
  }
  document_type_list() {
    return this.http.get<any>(this.apiUrl + 'document_type/getlist' );
  }

  account_type_add(data) {
    return this.http.post(this.apiUrl + 'account_type/create', data);
  }
  account_type_edit(data) {
    return this.http.post(this.apiUrl + 'account_type/edit', data);
  }
  account_type_delete(data) {
    return this.http.post(this.apiUrl + 'account_type/delete', data);
  }
  account_type_list() {
    return this.http.get<any>(this.apiUrl + 'account_type/getlist' );
  }

  reportingto_type_add(data) {
    return this.http.post(this.apiUrl + 'reportingto_type/create', data);
  }
  reportingto_type_edit(data) {
    return this.http.post(this.apiUrl + 'reportingto_type/edit', data);
  }
  reportingto_type_delete(data) {
    return this.http.post(this.apiUrl + 'reportingto_type/delete', data);
  }
  reportingto_type_list() {
    return this.http.get<any>(this.apiUrl + 'reportingto_type/getlist' );
  }

  
  designation_type_add(data) {
    return this.http.post(this.apiUrl + 'designation_type/create', data);
  }
  designation_type_edit(data) {
    return this.http.post(this.apiUrl + 'designation_type/edit', data);
  }
  designation_type_delete(data) {
    return this.http.post(this.apiUrl + 'designation_type/delete', data);
  }
  designation_type_list() {
    return this.http.get<any>(this.apiUrl + 'designation_type/getlist' );
  }

  currency_type_add(data) {
    return this.http.post(this.apiUrl + 'currency_type/create', data);
  }
  currency_type_edit(data) {
    return this.http.post(this.apiUrl + 'currency_type/edit', data);
  }
  currency_type_delete(data) {
    return this.http.post(this.apiUrl + 'currency_type/delete', data);
  }
  currency_type_list() {
    return this.http.get<any>(this.apiUrl + 'currency_type/getlist' );
  }

  bucket_type_add(data) {
    return this.http.post(this.apiUrl + 'bucket_type/create', data);
  }
  bucket_type_edit(data) {
    return this.http.post(this.apiUrl + 'bucket_type/edit', data);
  }
  bucket_type_delete(data) {
    return this.http.post(this.apiUrl + 'bucket_type/delete', data);
  }
  bucket_type_list() {
    return this.http.get<any>(this.apiUrl + 'bucket_type/getlist' );
  }

  products_detatils_add(data) {
    return this.http.post(this.apiUrl + 'products_detatils/create', data);
  }
  products_detatils_edit(data) {
    return this.http.post(this.apiUrl + 'products_detatils/edit', data);
  }
  products_detatils_delete(data) {
    return this.http.post(this.apiUrl + 'products_detatils/delete', data);
  }
  products_detatils_list() {
    return this.http.get<any>(this.apiUrl + 'products_detatils/getlist' );
  }

  userrole_add(data) {
    return this.http.post(this.apiUrl + 'userrole/create', data);
  }
  userrole_edit(data) {
    return this.http.post(this.apiUrl + 'userrole/edit', data);
  }
  userrole_delete(data) {
    return this.http.post(this.apiUrl + 'userrole/delete', data);
  }
  userrole_list() {
    return this.http.get<any>(this.apiUrl + 'userrole/getlist' );
  }

  usertype_add(data) {
    return this.http.post(this.apiUrl + 'usertype/create', data);
  }
  usertype_edit(data) {
    return this.http.post(this.apiUrl + 'usertype/edit', data);
  }
  usertype_delete(data) {
    return this.http.post(this.apiUrl + 'usertype/delete', data);
  }
  usertype_list() {
    return this.http.get<any>(this.apiUrl + 'usertype/getlist' );
  }
  

  usergroup_add(data) {
    return this.http.post(this.apiUrl + 'usergroup/create', data);
  }
  usergroup_edit(data) {
    return this.http.post(this.apiUrl + 'usergroup/edit', data);
  }
  usergroup_delete(data) {
    return this.http.post(this.apiUrl + 'usergroup/delete', data);
  }
  usergroup_list() {
    return this.http.get<any>(this.apiUrl + 'usergroup/getlist' );
  }


  useradd_create(data) {
    return this.http.post(this.apiUrl + 'useradd/create', data);
  }
  useradd_edit(data) {
    return this.http.post(this.apiUrl + 'useradd/edit', data);
  }
  useradd_delete(data) {
    return this.http.post(this.apiUrl + 'useradd/delete', data);
  }
  useradd_list() {
    return this.http.get<any>(this.apiUrl + 'useradd/getlist' );
  }

  Code_checker(data) {
    return this.http.post(this.apiUrl + 'entity_user/find_code', data);
  }
}
