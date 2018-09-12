import { Component } from "../../../node_modules/@angular/core";

import { PricingService } from "./pricing.service";

@Component({
    selector: 'app-sender',
    templateUrl: './pricing.component.html',
    
    providers: []
  })
  export class pricingComponent {
  
  public pricings = [];  

    constructor(private _PricingService: PricingService ){//private senderService: SenderService){
    }
    ngOnInit(){
      this._PricingService.getPricing()
      .subscribe(data => this.pricings=data)
    }


  }