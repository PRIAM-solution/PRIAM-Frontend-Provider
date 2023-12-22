import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CompletedRectificationSuppressionRequest } from '../../../../../../interfaces/completed-rectification-suppression-request';

@Injectable({
  providedIn: 'root'
})
export class PostSuppressionService {
  constructor(private httpClient: HttpClient) { }

  private baseUrl = 'http://localhost:8080';

  postCompletedSuppressionRequest(completedSuppressionRequest: CompletedRectificationSuppressionRequest): Observable<CompletedRectificationSuppressionRequest> {
    return this.httpClient.post<CompletedRectificationSuppressionRequest>(`${this.baseUrl}/right/postCompletedSuppressionRequest`, completedSuppressionRequest);
  }
}
