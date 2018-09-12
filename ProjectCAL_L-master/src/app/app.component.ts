import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Product, Service } from './app.service';
import { Router } from '../../node_modules/@angular/router';
import { Login }    from './app';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    providers: [Service]
})
export class AppComponent {
  public logo: string= "./assets/logo/logo.png"
showThis:boolean = false;
loginThis:boolean = true;
  products: Product[];

public Logins;
public key:string;


  showSubmenuModes: any;
  showFirstSubmenuModes: any;
  currentProduct: Product;

  constructor(service: Service,private login: Service, private router: Router) {
      this.products = service.getProducts();
      this.showSubmenuModes = [{
          name: "onHover",
          delay: { show: 0, hide: 500 }
      }, {
          name: "onClick",
          delay: { show: 0, hide: 300 }
      }];
      this.showFirstSubmenuModes = this.showSubmenuModes[1];
  }
  itemClick(data) {
      let item = data.itemData;
   this.router.navigate([item.routerLink])

  }
onClick(){
    this.showThis= false;
    this.loginThis= true;
}
onLogin(){
//this.ussername=name;
console.log(name);



    this.showThis= true;
    this.loginThis= false;

    
}


model = new Login('','');
  onSubmit() { 

this.key = this.model.ussername

    this.login.getLogin(this.key).subscribe(data => this.Logins = data);


    console.log(this.Logins)
    console.log(this.key)
      console.log(this.model.ussername)

      if (this.model.password == this.Logins.password){
      this.showThis= true;
      this.loginThis= false;}
     
     else
     {

     }

    }

}
