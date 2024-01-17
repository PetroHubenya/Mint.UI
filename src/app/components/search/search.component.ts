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

  constructor(
    private coinService: CoinsService,
    private router: Router,
    private route: ActivatedRoute 
  ){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
