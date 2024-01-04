import { Injectable } from '@angular/core';
import { Coin } from '../models/coin.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CoinsService {

  // baseApiUrl should be moved to the settings file.
  baseApiUrl: string = "https://localhost:7113";

  constructor(private http: HttpClient) {}

  // Get top n coins.
  GetTopNCoins(): Observable<Coin[]> {
    return this.http.get<Coin[]>(this.baseApiUrl + "/Coin/limit=10");
  }

  // Get coin by id.
  GetCoinById(id: string): Observable<Coin> {
    return this.http.get<Coin>(this.baseApiUrl + "/Coin/id=" + id);
  } 
}
