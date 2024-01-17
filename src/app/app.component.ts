import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Mint.UI';  

  searchString = '';

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }  
}
