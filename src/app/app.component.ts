import { Component } from '@angular/core';
import { Search } from './models/search.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Mint.UI';

  model = new Search('');

  searchTest = '';

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  
}
