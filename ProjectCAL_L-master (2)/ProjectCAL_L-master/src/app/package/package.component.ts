import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import CustomStore from "devextreme/data/custom_store";
import 'rxjs';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
})
export class packageComponent  {
  packageType: any = {};

  constructor(http: HttpClient) {
      this.packageType.store = new CustomStore({
          
        key: "packagePriceId",
        
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
       
        
        
        return http.get('http://aurum370.eastus.cloudapp.azure.com/api/PackagePrices')
            .toPromise()
            .then((data: any) => {
                return {
                    data: data
                }
               
            })
            .catch(error => { throw 'Data Loading Error' });

            
    },
    insert: function (values) {
        console.log(values);
        return http.post('http://aurum370.eastus.cloudapp.azure.com/api/PackagePrices/', values)
            .toPromise()
            ;
    },
    remove: function (key) {
        return http.delete('http://aurum370.eastus.cloudapp.azure.com/api/PackagePrices/' + encodeURIComponent(key))
            .toPromise();
    },
    update: function (key, values) {
      
      console.log(values);
         return http.put('http://aurum370.eastus.cloudapp.azure.com/api/PackagePrices/' + encodeURIComponent(key), values)
             .toPromise();
     


    }
});
     


}}
