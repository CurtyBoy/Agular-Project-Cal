import { Component } from "../../../node_modules/@angular/core";

import { ShipmentAgentService } from "./shipmentagent.service";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import CustomStore from "devextreme/data/custom_store";
import 'rxjs';


@Component({
    selector: 'app-sender',
    templateUrl: './shipmentagents.component.html',
    
    providers: []
  })
  export class shipmentagentsComponent {
  //   searchCriteria: string;
  //   sender: string;
  // senderService: any;
  
    
  agentSource: any = {};

  constructor(http: HttpClient) {
    this.agentSource.store = new CustomStore({

        key: "agentId",
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
       
        
        
        return http.get('http://aurum370.eastus.cloudapp.azure.com/api/shipmentagents')
            .toPromise()
            .then((data: any) => {
                return {
                    data: data,
                    
                }
               
            })
            .catch(error => { throw 'Data Loading Error' });

            
    },
    remove: function (key) {
        return http.delete('http://aurum370.eastus.cloudapp.azure.com/api/shipmentagents/' + encodeURIComponent(key))
            .toPromise();
    },
    }
    )}

  }
