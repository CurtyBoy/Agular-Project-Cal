import { Injectable } from '@angular/core';
import { HttpClient,} from '@angular/common/http'
import { Observable} from 'rxjs';
import { ILogins} from './app';

export class Product {   
    name: string;
    routerLink: string;

    
}

//This is where you can set menu items
var products: Product[] = [
{
    name:"Dashboard",
    routerLink:"/dashboard",
  
},
{
    name:"--------------------------------------",
    routerLink:"",
  
},
{
    name:"Senders",
    routerLink:"/sender"
},
{
    name:"Employees",
    routerLink:"/employee"
},

{
    name:"Shipment Agents",
    routerLink:"/shipmentagents"
},
{
    name:"Applications",
    routerLink:"/application"
},
{
    name:"--------------------------------------",
    routerLink:"",
  
},
{
    name:"Packages",
    routerLink:"/package"
},
{
    name:"Vehicles",
    routerLink:"/vehicle"
},
{
    name:"Vehicle Types ",
    routerLink:"/vehicletype"
},
{
    name:"--------------------------------------",
    routerLink:"",
  
},
{
    name:"Access Roles ",
    routerLink:"/accessrole"
},

{
    name:"Audit Logs",
    routerLink:"/auditlog"
},

{
    name:"Reports",
    routerLink:"/reports"
},

{
    name:"Settings",
    routerLink:"/settings"
}
//I see you already tried :P Yea but dont know how to call the routerlink?

// {
//     name: "Shipment Agents",  
//   routerLink:"",
//   item:[]
// },
// {
//     name: "Vehicles",  
//   routerLink:"",
//   item:[]
// },
// {
//     name: "Vehicle Type",  
//   routerLink:"",
//   item:[]
// },
// {
//     name: "",  
//   routerLink:"",
//   item:[]
// },
// {
//     name: "Shipment Agent",  
//   routerLink:"",
//   item:[]
// },
// {
//     name: "Settings",  
//   routerLink:"",
//   item:[]
// },]
];

@Injectable()
export class Service {
    getProducts(): Product[] {
        return products;
    }
    private Url:string ="http://aurum370.eastus.cloudapp.azure.com/api/logins/phone/";
    constructor(private http: HttpClient){}
    getLogin(key):Observable<ILogins[]>{
        return this.http.get<ILogins[]>(this.Url + key )
    }
}

