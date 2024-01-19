import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoinsComponent } from './components/coins/coins.component';
import { CoinComponent } from './components/coin/coin.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  {
    path: '',
    component: CoinsComponent
  },
  {
    path: 'coins',
    component: CoinsComponent
  },
  {
    path: 'coins/:searchString',
    component: CoinsComponent
  },
  {
    path: 'coin/:id',
    component: CoinComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
