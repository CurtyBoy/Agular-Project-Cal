import { Injectable } from '@angular/core';
import { HttpClient,} from '@angular/common/http'
import { Observable} from 'rxjs';
import { IPricing } from './pricing';

@Injectable({
  providedIn: 'root'
})
export class PricingService {

  private PricingUrl = '/api/PackageTypePrices';

  constructor(private http: HttpClient) { }

  getPricing(): Observable<IPricing[]> {
    return this.http.get<IPricing[]>(this.PricingUrl);

  }
}