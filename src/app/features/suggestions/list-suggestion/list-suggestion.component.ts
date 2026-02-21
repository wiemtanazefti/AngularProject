import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Suggestion } from '../../../models/suggestion';
import { SuggestionService } from '../suggestion.service';

@Component({
  selector: 'app-list-suggestion',
  templateUrl: './list-suggestion.component.html',
  styleUrls: ['./list-suggestion.component.css']
})
export class ListSuggestionComponent implements OnInit {

  constructor(
    private router: Router,
    private suggestionService: SuggestionService
  ) {}

  searchText: string = '';
  favorites: Suggestion[] = [];
  suggestions: Suggestion[] = [];

  ngOnInit(): void {
    this.suggestions = this.suggestionService.getSuggestions();
  }

  likeSuggestion(s: Suggestion) {
    s.nbLikes++;
  }

  addToFavorites(s: Suggestion) {
    if (!this.favorites.includes(s)) {
      this.favorites.push(s);
    }
  }

  goToDetails(id: number) {
    this.router.navigate(['/suggestions', id]);
  }
}