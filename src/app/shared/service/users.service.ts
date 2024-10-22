import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from '../../core/constants/api';
import { UsersResponse } from '../models/UsersResponse';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient:HttpClient) { }

  consultarUsuarios():Observable<UsersResponse>{
    return this.httpClient.get<UsersResponse>(`${API.BASE_ENDPOINT}${API.USERS}`)
  }

}
