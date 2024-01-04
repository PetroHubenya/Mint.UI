import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Coin } from 'src/app/models/coin.model';
import { CoinsService } from 'src/app/services/coins.service';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.css']
})

export class CoinsComponent implements OnInit{
  
  coins: Coin[] = [];

  constructor(
    private coinService: CoinsService,
    private router: Router
  ) {}

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

                // Зупинив відео на 53:25

}
