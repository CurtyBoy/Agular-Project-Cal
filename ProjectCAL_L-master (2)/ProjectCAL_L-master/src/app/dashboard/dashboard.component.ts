import { Component, OnInit } from '@angular/core';
import { DxMapModule, DxSelectBoxModule } from 'devextreme-angular';
import { Service, Marker, Population, Area, Data, CountryInfo, EnergyDescription } from 'src/app/dashboard/dashboard.service';


@Component({
  selector: 'app-dashboard',
  providers: [Service],
  templateUrl: './dashboard.component.html',
})
export class dashboardComponent  {
 public name: string = "Curt Watkins";
 public loactions = [];

  customMarkerUrl: string;
  mapMarkerUrl: string;
  markers: Marker[];
  populationData: Population[];
  types: string[] = ["area", "stackedarea", "fullstackedarea"];
  countries: Area[];
  waterLandRatio: Area[];
  dataSource: Data[];
  typess: string[] = ["line", "stackedline", "fullstackedline"];
  countriesInfo: CountryInfo[];
  energySources: EnergyDescription[]; v
  

  constructor(service: Service) {
    this.customMarkerUrl = this.mapMarkerUrl = service.getMarkerUrl();
    this.markers = service.getMarkers();
  

    this.populationData = service.getPopulationData();
    this.countries = service.getAreas();
    this.waterLandRatio = service.getLandWaterAreas();
    this.dataSource = service.getData();
    this.countriesInfo = service.getCountriesInfo();
    this.energySources = service.getEnergySources();
  }
  checkCustomMarker(data) {
    this.mapMarkerUrl = data.value ? this.customMarkerUrl : null;
  }
  showTooltips() {
    this.markers = this.markers.map(function (item) {
      item.tooltip.isShown = true;
      return item;
    });
  };
  ngOnInit(){
          // this.service.getCompany()
          // .subscribe(data => this.markers=data)
       
        }
}
