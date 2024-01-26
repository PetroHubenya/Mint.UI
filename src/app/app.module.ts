import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CoinsComponent } from './components/coins/coins.component';
import { CoinComponent } from './components/coin/coin.component';
import { ConfigService } from './services/config.service';
import { CoinsService } from './services/coins.service';
import { UsdPipe } from './models/usd-pipe';

@NgModule({
  declarations: [
    AppComponent,
    CoinsComponent,
    CoinComponent,
    UsdPipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    CoinsService,
    ConfigService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
