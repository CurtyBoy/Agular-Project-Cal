import { Component, OnInit } from '@angular/core';
import { Service, Company } from './application.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import CustomStore from "devextreme/data/custom_store";
import 'rxjs';


@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css'],
  providers: [ Service ],
})
export class applicationComponent {
  // companies: Company[];
  // labelLocation: string;
  // readOnly: boolean;
  // showColon: boolean;
  // minColWidth: number;
  // colCount: number;
  // width: any;

  // constructor( service: Service ) {
  //     this.labelLocation = "top";
  //     this.readOnly = false;
  //     this.showColon = true;
  //     this.minColWidth = 300;
  //     this.colCount = 2;
  //     this.companies = service.getCompanies();
  // }
  // ngOnInit() {
  // }



applicationSource: any = {};

    constructor(http: HttpClient) {
        this.applicationSource.store = new CustomStore({

            key: "applicationId",
           
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
               
                
                
                return http.get('http://aurum370.eastus.cloudapp.azure.com/applicationgrid')
                    .toPromise()
                    .then((data: any) => {
                        return {
                            data: data.applications,
                            totalCount: data.totalCount
                        }
                       
                    })
                    .catch(error => { throw 'Data Loading Error' });

                    
            },

            insert: function (values) {
              return http.post('http://aurum370.eastus.cloudapp.azure.com/api/Employees/', values)
                  .toPromise()
                  ;
          },
          remove: function (key) {
              return http.delete('http://aurum370.eastus.cloudapp.azure.com/api/Employees/' + encodeURIComponent(key))
                  .toPromise();
          },
          update: function (key, values) {
            
            console.log(values);
               return http.put('http://aurum370.eastus.cloudapp.azure.com/api/applications/' + encodeURIComponent(key), values)
                   .toPromise();
        

          }
        });
       
        
        
       
    }
   
    
}

