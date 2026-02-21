import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Suggestion } from '../../../models/suggestion';
import { SuggestionService } from '../../../core/services/suggestion.service';

@Component({
  selector: 'app-suggestion-details',
  templateUrl: './suggestion-details.component.html',
  styleUrls: ['./suggestion-details.component.css']
})
export class SuggestionDetailsComponent implements OnInit {

  suggestion!: Suggestion;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private suggestionService: SuggestionService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.suggestionService.getSuggestionByIdHttp(id).subscribe({
      next: (data) => this.suggestion = data,
      error: () => this.router.navigate(['/suggestions'])
    });
  }

  deleteSuggestion() {
    this.suggestionService.deleteSuggestionHttp(this.suggestion.id).subscribe(() => {
      this.router.navigate(['/suggestions']);
    });
  }

  goBack() {
    this.router.navigate(['/suggestions']);
  }
}