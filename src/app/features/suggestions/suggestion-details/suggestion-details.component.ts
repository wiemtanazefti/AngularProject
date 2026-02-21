import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Suggestion } from '../../../models/suggestion';
import { SuggestionService } from '../suggestion.service';

@Component({
  selector: 'app-suggestion-details',
  templateUrl: './suggestion-details.component.html',
  styleUrls: ['./suggestion-details.component.css']
})
export class SuggestionDetailsComponent implements OnInit {

  suggestionId!: number;
  suggestion!: Suggestion | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private suggestionService: SuggestionService
  ) {}

  ngOnInit(): void {
    this.suggestionId = Number(this.route.snapshot.paramMap.get('id'));
    this.suggestion = this.suggestionService.getById(this.suggestionId);

    if (!this.suggestion) {
      this.router.navigate(['/suggestions']);
    }
  }

  goBack() {
    this.router.navigate(['/suggestions']);
  }
}