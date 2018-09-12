import { Component, OnInit, Testability } from "../../../node_modules/@angular/core";
import { EmployeeService, Customer } from "./employee.service";
import { Empolyee } from "./employee";
import { NgForm, NgModel } from "../../../node_modules/@angular/forms";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import CustomStore from "devextreme/data/custom_store";
import 'rxjs';

@Component({
    selector: 'app-employee',
    templateUrl: './employee.component.html',
    //styleUrls: ['./employee.css'],
  })
  export class employeeComponent  {
    dataSource: any = {};
audit:string ="";
    constructor(http: HttpClient) {
        this.dataSource.store = new CustomStore({

           key: "employeeId",
           
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
               
                
                
                return http.get('http://aurum370.eastus.cloudapp.azure.com/employeegrid')
                    .toPromise()
                    .then((data: any) => {
                        return {
                            data: data.employees,
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
            console.log(this.audit)
            console.log(values);
              return http.put('http://aurum370.eastus.cloudapp.azure.com/api/Employees/' + encodeURIComponent(key), values)
                  .toPromise();
         
          }
          
        });
       
        
        
       
    }
    model = new Empolyee('','','','','','','','','','','');
   
  onSubmit() { 

console.log(this.model)

  //  this.login.getLogin(this.key).subscribe(data => this.Logins = data);


   

    }
   
    
}











    
//     public showThis:boolean = false;
//     public hideThis:boolean = true;
//     public editThis:boolean = false;
//     public name:string;
//     public employees = [];  
//     employes:Empolyee[]=[]
//     customers: Customer[];

//     constructor(private _employeeService: EmployeeService )
//        {
//           this.customers =  _employeeService.getCustomers();
//     }
//     ngOnInit(){
    

//       this._employeeService.getEmployee()
//       .subscribe(data => this.employees=data)
//     }
// onClick(){
//   this.showThis = true;
//   this.hideThis = false;
// }
// onCancel(){
//   this.showThis = false;
//   this.hideThis = true;
//   this.editThis = false;
// }
// onEdit(){
//   this.editThis = true;
//   this.hideThis = false;
// this.name= "";
  
// } 
// onDelete(){
//   this.showThis = true;
//   this.hideThis = false;
// }

// saveEmployee(empForm:NgForm): void{
//   console.log(empForm.value)
// }

// // employeeModel = new Empolyee(""," ",1," ", 2, 1)
// //   }
//   }