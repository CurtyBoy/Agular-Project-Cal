import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable} from 'rxjs';
import { IVehicle } from './vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  private VehicleUrl ='/api/Vehicles';

  constructor(private http: HttpClient) {}

  getVehicle(): Observable<IVehicle[]>{
    return this.http.get<IVehicle[]>(this.VehicleUrl);

    }

}
