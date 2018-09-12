import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
})
export class reportsComponent  {

  @ViewChild('content') content: ElementRef;
  @ViewChild('location') location: ElementRef;
  @ViewChild('area') area: ElementRef;
  @ViewChild('package') package: ElementRef;
  @ViewChild('duration') duration: ElementRef;
  @ViewChild('shipments') shipments: ElementRef;
  @ViewChild('salary') salary: ElementRef;
  @ViewChild('income') income: ElementRef;
  
  loginThis:boolean = false;
  hideThis:boolean = false;
  showThis:boolean = true;

  loginThis1:boolean = false;
  hideThis1:boolean = false;
  showThis1:boolean = true;

  loginThis2:boolean = false;
  hideThis2:boolean = false;
  showThis2:boolean = true;

  loginThis3:boolean = false;
  hideThis3:boolean = false;
  showThis3:boolean = true;

  loginThis4:boolean = false;
  hideThis4:boolean = false;
  showThis4:boolean = true;

  loginThis5:boolean = false;
  hideThis5:boolean = false;
  showThis5:boolean = true;

  loginThis6:boolean = false;
  hideThis6:boolean = false;
  showThis6:boolean = true;

public view:string ="View";

  onLogin(){

      this.loginThis= true;
      this.hideThis= true;
      this.showThis= false;
      this.view ="Hide";
 
}
onhide(){
 
  this.loginThis= false;
  this.showThis= true;
  this.hideThis= false;
 
}
onLogin1(){

  this.loginThis1= true;
  this.hideThis1= true;
  this.showThis1= false;
 

}
onhide1(){

this.loginThis1= false;
this.showThis1= true;
this.hideThis1= false;

}
onLogin2(){

  this.loginThis= true;
  this.hideThis= true;
  this.showThis= false;


}
onhide2(){

this.loginThis= false;
this.showThis= true;
this.hideThis= false;

}
onLogin3(){

  this.loginThis= true;
  this.hideThis= true;
  this.showThis= false;
 

}
onhide3(){

this.loginThis= false;
this.showThis= true;
this.hideThis= false;

}
onLogin4(){

  this.loginThis= true;
  this.hideThis= true;
  this.showThis= false;


}
onhide4(){

this.loginThis= false;
this.showThis= true;
this.hideThis= false;

}
onLogin5(){

  this.loginThis= true;
  this.hideThis= true;
  this.showThis= false;
  

}
onhide5(){

this.loginThis= false;
this.showThis= true;
this.hideThis= false;

}
onLogin6(){

  this.loginThis= true;
  this.hideThis= true;
  this.showThis= false;
 
}
onhide6(){

this.loginThis= false;
this.showThis= true;
this.hideThis= false;

}

  public downloadPDF(){
let doc = new jsPDF();


let specialElementHandlers = {
  '#editor': function(element,renderrer)
  {
    return true;
  }
};
let location = this.location.nativeElement;
doc.fromHTML(location.innerHTML, 15,15,{
  'width': 190,
  'elementHandlers': specialElementHandlers
});
doc.save('test.pdf');
}




public downloadLocationPDF(){

let doc1 = new jsPDF();

let specialElementHandlers = {
  '#editor': function(element,renderrer)
  {
    return true;
  }
};
let area = this.area.nativeElement;
doc1.fromHTML(area.innerHTML, 15,15,{
  'width': 190,
  'elementHandlers': specialElementHandlers
});
doc1.save('area.pdf');
}


public downloadpackagePDF(){

  let doc1 = new jsPDF();
  
  let specialElementHandlers = {
    '#editor': function(element,renderrer)
    {
      return true;
    }
  };
  let packages = this.package.nativeElement;
  doc1.fromHTML(packages.innerHTML, 15,15,{
    'width': 190,
    'elementHandlers': specialElementHandlers
  });
  doc1.save('package.pdf');
  }
  
  public downloaddurationPDF(){

    let doc1 = new jsPDF();
    
    let specialElementHandlers = {
      '#editor': function(element,renderrer)
      {
        return true;
      }
    };
    let duration = this.duration.nativeElement;
    doc1.fromHTML(duration.innerHTML, 15,15,{
      'width': 190,
      'elementHandlers': specialElementHandlers
    });
    doc1.save('duration.pdf');
    }
    

    public downloadshipmentsPDF(){

      let doc1 = new jsPDF();
      
      let specialElementHandlers = {
        '#editor': function(element,renderrer)
        {
          return true;
        }
      };
      let shipments = this.shipments.nativeElement;
      doc1.fromHTML(shipments.innerHTML, 15,15,{
        'width': 190,
        'elementHandlers': specialElementHandlers
      });
      doc1.save('shipments.pdf');
      }
      

      public downloadsalaryPDF(){

        let doc1 = new jsPDF();
        
        let specialElementHandlers = {
          '#editor': function(element,renderrer)
          {
            return true;
          }
        };
        let salary = this.salary.nativeElement;
        doc1.fromHTML(salary.innerHTML, 15,15,{
          'width': 190,
          'elementHandlers': specialElementHandlers
        });
        doc1.save('salary.pdf');
        }
        

        public downloadincomePDF(){

          let doc1 = new jsPDF();
          
          let specialElementHandlers = {
            '#editor': function(element,renderrer)
            {
              return true;
            }
          };
          let income = this.income.nativeElement;
          doc1.fromHTML(income.innerHTML, 15,15,{
            'width': 190,
            'elementHandlers': specialElementHandlers
          });
          doc1.save('income.pdf');
          }
        }
