import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import CustomStore from "devextreme/data/custom_store";
import 'rxjs';

@Component({
  selector: 'app-vehicletype',
  templateUrl: './vehicletype.component.html',
})
export class vehicletypeComponent {

  vehicletypeSource: any = {};

  constructor(http: HttpClient) {
    this.vehicletypeSource.store = new CustomStore({
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
       
        
        
        return http.get('http://aurum370.eastus.cloudapp.azure.com/api/vehicletypes')
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
    
     
      
    }
