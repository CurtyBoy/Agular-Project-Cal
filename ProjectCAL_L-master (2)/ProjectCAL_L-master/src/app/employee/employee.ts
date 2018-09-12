export interface IEmployee{
    employeeId: number,
    employeeName:string,
    employeeSurname:string,
    employeeEmail:string,
    employeeNationalId:number,
    employeePassportNo:number,
    employeeActive:number,
    dateEmployed:Date,
    accessRoleId: number,
    roleDescription:string,
    loginId: number,
    phoneNo: number,
    password: string,
    
}

export class Login {
    public phoneNo: string;
    public password: string;
    public userTypeId: string;
}

export class Empolyee {
    constructor(
        public employeeName: string,
        public employeeSurname: string,
        public employeeEmail: string,
        public employeeNationalId: string,
        public employeePassportNo: string,
        public employeeActive: string,
        public dateEmployed: string,
        public accessRoleId: string,
        // public login:Login,
        public phoneNo: string,
    public password: string,
    public userTypeId: string,

        
       
      
       
    ){}
}
