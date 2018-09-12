import { Injectable } from '@angular/core';
import { HttpClient,} from '@angular/common/http'
import { Observable} from 'rxjs';
import { ISettings, company } from './settings';

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  private CompanyUrl = 'http://aurum370.eastus.cloudapp.azure.com/api/companies';
private url ='http://aurum370.eastus.cloudapp.azure.com/api/Companies/6';
  constructor(private http: HttpClient) { }

  getCompany(): Observable<ISettings[]> {
    return this.http.get<ISettings[]>(this.CompanyUrl);

  }

  putCompany(company: company){
   return this.http.put<any>(this.url,company)
  }

  postCompany(company: company):Observable<ISettings>{
    return this.http.post<ISettings>(this.CompanyUrl,company)
   }
}