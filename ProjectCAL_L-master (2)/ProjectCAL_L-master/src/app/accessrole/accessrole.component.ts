import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import CustomStore from "devextreme/data/custom_store";
import 'rxjs';


@Component({
  selector: 'app-accessrole',
  templateUrl: './accessrole.component.html',
})
export class accessroleComponent implements OnInit {
  accessArea: any = {};

  constructor(http: HttpClient) {
    this.accessArea.store = new CustomStore({
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
       
        
        
        return http.get('http://aurum370.eastus.cloudapp.azure.com/api/accessroles')
            .toPromise()
            .then((data: any) => {
                return {
                    data: data,
                    
                }
               
            })
            .catch(error => { throw 'Data Loading Error' });

            
    },
    }
    )}

  ngOnInit() {
  }

}
