import { Injectable } from '@angular/core';
import { Suggestion } from '../../models/suggestion';

@Injectable({
  providedIn: 'root'
})
export class SuggestionService {

  private suggestionList: Suggestion[] = [
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

  getSuggestionsList(): Suggestion[] {
    return this.suggestionList;
  }

  getSuggestionById(id: number): Suggestion | undefined {
    return this.suggestionList.find(s => s.id === id);
  }

  deleteSuggestion(id: number) {
    this.suggestionList = this.suggestionList.filter(s => s.id !== id);
  }

  addSuggestion(s: Suggestion) {
    this.suggestionList.push(s);
  }

  updateLikes(id: number) {
    const s = this.getSuggestionById(id);
    if (s) s.nbLikes++;
  }
}