import { Injectable } from '@angular/core';


import { HttpClient, } from '@angular/common/http'
import { } from '../../../node_modules/@types/selenium-webdriver/http';

import { Observable} from 'rxjs';


import { ISender } from './sender';



@Injectable({
  providedIn: 'root'
})
export class SenderService {
  // test: any;
  // log: any;
  private sendersUrl ='/api/Senders';
//'/api/Senders'
  constructor(private http: HttpClient) {}

  getSenders(): Observable<ISender[]>{
    return this.http.get<ISender[]>(this.sendersUrl);

    }

 

}
