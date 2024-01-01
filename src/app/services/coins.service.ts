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

  GetTopNCoins(): Observable<Coin[]> {
    return this.http.get<Coin[]>(this.baseApiUrl + "/Coin/limit=10");
  }
}
