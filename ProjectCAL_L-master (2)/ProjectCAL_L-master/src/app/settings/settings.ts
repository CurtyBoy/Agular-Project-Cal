export interface ISettings{
    companyId:number,
    companyName:string,
    companyPhone:number,
    companyEmail:string,
    companyStreetAddress:string,
    companySuburb:string,
    companyCity:string,
    companyPostalCode:number,
    vatNo:string,
    registrationNo:string,
    payGateId:number,
    payGatePassword:string
}

export class company{
    constructor(
      public  companyId:number,
      public companyName:string,
      public companyPhone:string,
      public companyEmail:string,
      public companyStreetAddress:string,
      public companySuburb:string,
      public  companyCity:string,
      public companyPostalCode:number,
      public  vatNo:string,
      public  registrationNo:string,
      public  payGateId:number,
      public  payGatePassword:string
    ) {}
}