import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Suggestion } from '../../models/suggestion';

@Injectable({
  providedIn: 'root'
})
export class SuggestionService {

  private apiUrl = 'http://localhost:3000/suggestions';

  constructor(private http: HttpClient) {}

  // GET ALL
  getSuggestionsHttp(): Observable<Suggestion[]> {
    return this.http.get<Suggestion[]>(this.apiUrl);
  }

  // GET BY ID
  getSuggestionByIdHttp(id: number): Observable<Suggestion> {
    return this.http.get<Suggestion>(`${this.apiUrl}/${id}`);
  }

  // POST
  addSuggestionHttp(s: Suggestion): Observable<Suggestion> {
    return this.http.post<Suggestion>(this.apiUrl, s);
  }

  // PUT
  updateSuggestionHttp(id: number, s: Suggestion): Observable<Suggestion> {
    return this.http.put<Suggestion>(`${this.apiUrl}/${id}`, s);
  }

  // DELETE
  deleteSuggestionHttp(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // PATCH (Like)
  updateLikesHttp(id: number, nbLikes: number): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${id}`, { nbLikes });
  }
}