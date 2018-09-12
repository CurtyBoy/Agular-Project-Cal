import { Injectable } from '@angular/core';
import { HttpClient,} from '@angular/common/http'
import { Observable} from 'rxjs';
import { IShipmentAgent } from './shipmentagent';

@Injectable({
  providedIn: 'root'
})
export class ShipmentAgentService {

  private ShipmentAgentUrl = '/api/ShipmentAgents';

  constructor(private http: HttpClient) { }

  getShipmentAgent(): Observable<IShipmentAgent[]> {
    return this.http.get<IShipmentAgent[]>(this.ShipmentAgentUrl);

  }
}