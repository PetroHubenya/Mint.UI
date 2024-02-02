import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Coin } from 'src/app/models/coin.model';
import { CoinsService } from 'src/app/services/coins.service';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.css']
})

export class CoinsComponent implements OnInit{
  
  searchString = '';

  coins: Coin[] = [];  

  constructor(
    private coinService: CoinsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}


  /*
  ngOnInit(): void {
    this.coinService.GetTopNCoins().subscribe({
      next: (coins) => {
        this.coins = coins;
      },
      error: (responce) => {
        console.log(responce);
      }
    })
  }
  */

  ngOnInit(): void {
    this.getCoins();
  }

  getCoins(): void {
    this.coinService.GetTopNCoins().subscribe({
      next: (coins) => {
        this.coins = coins;
      },
      error: (responce) => {
        console.log(responce);
      }
    })
  }

  searchCoins(): void {
    this.coinService.SearchCoinByNameOrSymbol(this.searchString).subscribe({
      next: (responce) => {
        this.coins = responce;      // Receive the responce from the API and use it to update the 'coins' object.
      },
      error: (err) => {
        console.log(err);
      }
    }) 
  }
}
