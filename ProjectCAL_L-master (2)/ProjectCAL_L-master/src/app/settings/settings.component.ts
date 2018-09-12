import { Component } from "../../../node_modules/@angular/core";

import { SettingService } from "./settings.service";
import { company } from "./settings";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import CustomStore from "devextreme/data/custom_store";
import 'rxjs';
@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',

    providers: []
})
export class settingsComponent {

    public companys = [];
    dataSource: any = {};
    priceSource: any = {};

    public showThis: boolean;


    constructor(http: HttpClient) {
        this.priceSource.store = new CustomStore({

            key: "fixedPriceId",
            load: function (loadOptions: any) {
                var params = '?';

                params += 'skip=' + loadOptions.skip || 0;
                params += '&take=' + loadOptions.take || 12;

                if (loadOptions.sort) {
                    params += '&orderby=' + loadOptions.sort[0].selector;
                    if (loadOptions.sort[0].desc) {
                        params += ' desc';
                    }
                }
                return http.get('http://aurum370.eastus.cloudapp.azure.com/api/FixedPrices')
                    .toPromise()
                    .then((data: any) => {
                        return {
                            data: data,

                        }

                    })
                    .catch(error => { throw 'Data Loading Error' });
            },
            insert: function (values) {
                console.log(values)
                return http.post('http://aurum370.eastus.cloudapp.azure.com/api/FixedPrices', values)
                    .toPromise()
                    ;
            },
            remove: function (key) {
                return http.delete('http://aurum370.eastus.cloudapp.azure.com/api/FixedPrices/' + encodeURIComponent(key))
                    .toPromise();
            },
            update: function (key, values) {
                console.log(values)
                return http.put('http://aurum370.eastus.cloudapp.azure.com/api/FixedPrices/' + encodeURIComponent(key), values)
                    .toPromise();
            }
        });

        this.dataSource.store = new CustomStore({

            key: "companyId",
            load: function (loadOptions: any) {
                var params = '?';

                params += 'skip=' + loadOptions.skip || 0;
                params += '&take=' + loadOptions.take || 12;

                if (loadOptions.sort) {
                    params += '&orderby=' + loadOptions.sort[0].selector;
                    if (loadOptions.sort[0].desc) {
                        params += ' desc';
                    }
                }
                return http.get('http://aurum370.eastus.cloudapp.azure.com/api/Companies')
                    .toPromise()
                    .then((data: any) => {
                        return {
                            data: data,

                        }

                    })
                    .catch(error => { throw 'Data Loading Error' });
            },
            insert: function (values) {
                console.log(values)
                return http.post('http://aurum370.eastus.cloudapp.azure.com/api/Companies', values)
                    .toPromise()
                    ;
            },
            remove: function (key) {
                return http.delete('http://aurum370.eastus.cloudapp.azure.com/api/Companies/' + encodeURIComponent(key))
                    .toPromise();
            },
            update: function (key, values) {
                console.log(values)
                return http.put('http://aurum370.eastus.cloudapp.azure.com/api/Companies/' + encodeURIComponent(key), values)
                    .toPromise();
            }
        });


        
    }

    //     ngOnInit(){
    //       this._SettingService.getCompany()
    //       .subscribe(data => this.companys=data)
    //       this.showThis=true;
    //     }
    // companyModel = new company(6,'Bramhope Group PTY(Ltd)','0113975075','sales@bramhope.co.za',' No 7 Jan Smuts Office Park, Jones Road','Jet Park','Ekurhuleni',1459,'123456','2002/9876543/12',12345678910,'password')
    //     onClick(){

    //     }

    //     onSubmit(){
    //       this._SettingService.putCompany(this.companyModel).subscribe(data => this.companyModel);

    //     }
    //     post(){
    //       this._SettingService.postCompany(this.companyModel).subscribe(data => this.companyModel);

    //     }




}