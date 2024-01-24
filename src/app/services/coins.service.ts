import { Injectable } from '@angular/core';
import { Coin } from '../models/coin.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})

export class CoinsService {

  constructor(private http: HttpClient, private configService: ConfigService) {}

  // Get top n coins.
  GetTopNCoins(): Observable<Coin[]> {
    return this.http.get<Coin[]>(this.configService.apiUrl + "/Coin/limit=10");
  }

  // Get coin by id.
  GetCoinById(id: string): Observable<Coin> {
    return this.http.get<Coin>(this.configService.apiUrl + "/Coin/id=" + id);
  }

  // Search coins by name or symbol.
  SearchCoinByNameOrSymbol(searchString: string): Observable<Coin[]> {
    return this.http.get<Coin[]>(this.configService.apiUrl + "/Coin/search=" + searchString);
  }
}
