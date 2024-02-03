import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoinHistory } from 'src/app/models/coin-history';
import { Coin } from 'src/app/models/coin.model';
import { CoinsService } from 'src/app/services/coins.service';

@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.css']
})

export class CoinComponent implements OnInit {

  coin: Coin = {
    id: '',
    rank: 0,
    symbol: '',
    name: '',
    supply: 0,
    maxSupply: 0,
    marketCapUsd: 0,
    volumeUsd24Hr: 0,
    priceUsd: 0,
    changePercent24Hr: 0,
    vwap24Hr: 0
  }

  interval: string = 'm30'; // Default value

  coinHistoryList: CoinHistory[] = [];

  constructor(
    private coinService: CoinsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getCoin();
    this.getCoinHistoryByIdAndInterval();
  }

  getCoin(): void {
    this.route.paramMap.subscribe({
      next: (param) => {
        const id = param.get('id');
        if (id !== null) {
          this.coinService.GetCoinById(id).subscribe({
            next: (responce) => {
              this.coin = responce;      // Receive the responce from the API and use it to update the 'coin' object.
            },
            error: (err) => {
              console.log(err);
            }
          })
        }
      }
    })
  }

  getCoinHistoryByIdAndInterval(): void {
    this.route.paramMap.subscribe({
      next: (param) => {
        const id = param.get('id');
        if (id !== null && this.interval !== undefined) {
          this.coinService.GetCoinHistoryByIdAndInterval(id, this.interval).subscribe({
            next: (responce) => {
              this.coinHistoryList = responce; // Receive the responce from the API and
            },
            error: (err) => {
              console.log(err);
            }
          })
        }
      }
    });
  }
}
