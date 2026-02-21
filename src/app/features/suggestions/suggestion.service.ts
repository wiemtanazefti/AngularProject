import { Injectable } from '@angular/core';
import { Suggestion } from '../../models/suggestion';

@Injectable({
  providedIn: 'root'
})
export class SuggestionService {

  private suggestions: Suggestion[] = [
    {
      id: 1,
      title: 'Organiser une journée team building',
      description: 'Organisation d’une journée pour renforcer la cohésion.',
      category: 'Activités et événements',
      date: new Date('2025-01-20'),
      status: 'en_attente',
      nbLikes: 10
    },
    {
      id: 2,
      title: 'Améliorer le système de réservation',
      description: 'Amélioration du système de réservation.',
      category: 'Technologie et services numériques',
      date: new Date('2025-01-15'),
      status: 'refusee',
      nbLikes: 0
    }
  ];

  getSuggestions(): Suggestion[] {
    return this.suggestions;
  }

  addSuggestion(s: Suggestion) {
    this.suggestions.push(s);
  }

  getById(id: number): Suggestion | undefined {
    return this.suggestions.find(s => s.id === id);
  }
}