import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import CustomStore from "devextreme/data/custom_store";
import 'rxjs';


@Component({
  selector: 'app-auditlog',
  templateUrl: './auditlog.component.html',
})
export class auditlogComponent implements OnInit {
  auditSource: any = {};

  constructor(http: HttpClient) {
    this.auditSource.store = new CustomStore({
      load: function (loadOptions: any) {
        var params = '?';

        params += 'skip=' + loadOptions.skip || 0;
        params += '&take=' + loadOptions.take || 12;

        if(loadOptions.sort) {
            params += '&orderby=' + loadOptions.sort[0].selector;
            if(loadOptions.sort[0].desc) {
                params += ' desc';
            }
        }
       
        
        
        return http.get('http://aurum370.eastus.cloudapp.azure.com/auditloggrid')
            .toPromise()
            .then((data: any) => {
                return {
                    data: data.auditLogs,
                    totalCount: data.totalCount
                }
               
            })
            .catch(error => { throw 'Data Loading Error' });

            
    },
    }
    )}

  ngOnInit() {
  }

}
