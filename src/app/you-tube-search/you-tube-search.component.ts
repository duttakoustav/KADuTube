import { SearchResult } from './search-result.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-you-tube-search',
  templateUrl: './you-tube-search.component.html',
  styleUrls: ['./you-tube-search.component.css']
})
export class YouTubeSearchComponent implements OnInit {
  results: SearchResult[];
  loading: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  updateResults(results: SearchResult[]): void {
    this.results = results;
  }

  returnToMenu() {
    // window.location.href = "https://pqr";
  }

}
