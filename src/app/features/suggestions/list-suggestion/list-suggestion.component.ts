import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Suggestion } from '../../../models/suggestion';
import { SuggestionService } from '../../../core/services/suggestion.service';

@Component({
  selector: 'app-list-suggestion',
  templateUrl: './list-suggestion.component.html',
  styleUrls: ['./list-suggestion.component.css']
})
export class ListSuggestionComponent implements OnInit {

  suggestions: Suggestion[] = [];

  constructor(
    private router: Router,
    private suggestionService: SuggestionService
  ) {}

  ngOnInit(): void {
    this.loadSuggestions();
  }

  loadSuggestions() {
    this.suggestionService.getSuggestionsHttp().subscribe(data => {
      this.suggestions = data;
    });
  }

  likeSuggestion(s: Suggestion) {
    this.suggestionService.updateLikesHttp(s.id, s.nbLikes + 1).subscribe(() => {
      s.nbLikes++;
    });
  }

  deleteSuggestion(id: number) {
    this.suggestionService.deleteSuggestionHttp(id).subscribe(() => {
      this.suggestions = this.suggestions.filter(s => s.id !== id);
    });
  }

  goToDetails(id: number) {
    this.router.navigate(['/suggestions', id]);
  }
}