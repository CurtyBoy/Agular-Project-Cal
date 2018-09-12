import { Injectable } from '@angular/core';
import { HttpClient,} from '@angular/common/http'
import { Observable} from 'rxjs';

export class Tooltip {
    isShown: boolean;
    text: string;
}

export class Marker {
    location: any ;
    tooltip: Tooltip;
}

let markerUrl = "https://js.devexpress.com/Demos/RealtorApp/images/map-marker.png";

let markers: Marker[] = [
    //{
//     location: [40.755833, -73.986389],
//     tooltip: {
//         isShown: false,
//         text: "Times Square"
//     }
// },
 {
    location: "-25.756047, 28.233292",
    tooltip: {
        isShown: false,
        text: "Central Park"
    }
},  
//     location: "Brooklyn Bridge,New York,NY",
//     tooltip: {
//         isShown: false,
//         text: "Brooklyn Bridge"
//     }
];

// getLocation(){
//     return this.http.get()
// }


export class Population {
    country: string;
    y014: number;
    y1564: number;
    y65: number;
}

let populationData: Population[] = [{
    country: "China",
    y014: 320866959,
    y1564: 853191410,
    y65: 87774113
}, {
    country: "India",
    y014: 340419115,
    y1564: 626520945,
    y65: 47063757
}, {
    country: "United States",
    y014: 58554755,
    y1564: 182172625,
    y65: 34835293
}, {
    country: "Indonesia",
    y014: 68715705,
    y1564: 146014815,
    y65: 10053690
}, {
    country: "Brazil",
    y014: 50278034,
    y1564: 113391494,
    y65: 9190842
}, {
    country: "Russia",
    y014: 26465156,
    y1564: 101123777,
    y65: 18412243
}];
export class Area {
    name: string;
    area: number;
}
let countries: Area[] = [{
    name: "Russia",
    area: 0.12
}, {
        name: "Canada",
        area: 0.07
    }, {
        name: "USA",
        area: 0.07
    }, {
        name: "China",
        area: 0.07
    }, {
        name: "Brazil",
        area: 0.06
    }, {
        name: "Australia",
        area: 0.05
    }, {
        name: "India",
        area: 0.02
    }, {
        name: "Others",
        area: 0.55
    }];

let waterLandRatio: Area[] = [{
        name: 'Land',
        area: 0.29
}, {
        name: 'Water',
        area: 0.71
    }];

    export class Data {
        day: string;
        oranges: number;
    }
    let data: Data[] = [{
        day: "Monday",
        oranges: 3
    }, {
        day: "Tuesday",
        oranges: 2
    }, {
        day: "Wednesday",
        oranges: 3
    }, {
        day: "Thursday",
        oranges: 4
    }, {
        day: "Friday",
        oranges: 6
    }, {
        day: "Saturday",
        oranges: 11
    }, {
        day: "Sunday",
        oranges: 4
    }];
    
export class CountryInfo {
    country: string;
    hydro: number;
    oil: number;
    gas: number;
    coal: number;
    nuclear: number;
}

export class EnergyDescription {
    value: string;
    name: string;
}

let energySources: EnergyDescription[] = [
    { value: "hydro", name: "Hydro-electric" },
    { value: "oil", name: "Oil" },
    { value: "gas", name: "Natural gas" },
    { value: "coal", name: "Coal" },
    { value: "nuclear", name: "Nuclear" }
];

let countriesInfo: CountryInfo[]  = [{
    country: "USA",
    hydro: 59.8,
    oil: 937.6,
    gas: 582,
    coal: 564.3,
    nuclear: 187.9
}, {
    country: "China",
    hydro: 74.2,
    oil: 308.6,
    gas: 35.1,
    coal: 956.9,
    nuclear: 11.3
}, {
    country: "Russia",
    hydro: 40,
    oil: 128.5,
    gas: 361.8,
    coal: 105,
    nuclear: 32.4
}, {
    country: "Japan",
    hydro: 22.6,
    oil: 241.5,
    gas: 64.9,
    coal: 120.8,
    nuclear: 64.8
}, {
    country: "India",
    hydro: 19,
    oil: 119.3,
    gas: 28.9,
    coal: 204.8,
    nuclear: 3.8
}, {
    country: "Germany",
    hydro: 6.1,
    oil: 123.6,
    gas: 77.3,
    coal: 85.7,
    nuclear: 37.8
}];

export class ConfigService {
    constructor(private http: HttpClient) { }
  }

@Injectable()
export class Service {
    private url ='http://aurum370.eastus.cloudapp.azure.com/api/ShipmentAgentLocations';
    constructor(private http: HttpClient) { }

    getMarkerUrl() : string {
        return markerUrl;
    }
    getMarkers() : Marker[] {
        return markers;
    }
    getPopulationData(): Population[] {
        return populationData;
    }
    getAreas(): Area[] {
        return countries;
    }
    
    getLandWaterAreas(): Area[] {
        return waterLandRatio;
        
    }
    getData(): Data[] {
        return data;}
        getEnergySources(): EnergyDescription[] {
            return energySources;
        }
        getCountriesInfo(): CountryInfo[] {
            return countriesInfo;
        }

        getCompany(): Observable<Marker[]> {
            return this.http.get<Marker[]>(this.url);
        
          }

   
}