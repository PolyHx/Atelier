import { Component } from '@angular/core';
import * as data from '../assets/data.json';
import { BeerModel } from './beer.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  searchInput = '';

  beers: BeerModel[] = data.beers;

  constructor() {

  }

  getFilteredBeers(): BeerModel[] {
    return this.beers.filter((b) => {
      return b.name.toLowerCase().includes(this.searchInput.toLowerCase());
    });
  }
}
