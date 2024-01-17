import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Coin } from 'src/app/models/coin.model';
import { CoinsService } from 'src/app/services/coins.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  searchString = '';

  coins: Coin[] = [];

  constructor(
    private coinService: CoinsService,
    private router: Router,
    private route: ActivatedRoute 
  ) {}

  ngOnInit(): void {
    this.getCoins();
  }

  getCoins(): void {
    this.route.paramMap.subscribe({
      next: (param) => {
        const searchString = param.get('searchString');
        if (searchString !== null) {
          this.coinService.SearchCoinByNameOrSymbol(searchString).subscribe({
            next: (responce) => {
              this.coins = responce;      // Receive the responce from the API and use it to update the 'coins' object.
            },
            error: (err) => {
              console.log(err);
            }
          })
        }
      }
    })
  }

}
