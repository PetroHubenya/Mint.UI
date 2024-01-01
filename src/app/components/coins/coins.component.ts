import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Coin } from 'src/app/models/coin.model';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.css']
})

export class CoinsComponent implements OnInit{
  
  coins: Coin[] = [];

  constructor(private router: Router){

  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
