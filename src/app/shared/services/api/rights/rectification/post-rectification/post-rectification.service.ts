import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CompletedRectificationSuppressionRequest } from '../../../../../../interfaces/completed-rectification-suppression-request';

@Injectable({
  providedIn: 'root'
})
export class PostRectificationService {
  constructor(private httpClient: HttpClient) { }

  private baseUrl = 'http://localhost:8080';

  postCompletedRectificationRequest(completedRectificationRequest: CompletedRectificationSuppressionRequest): Observable<CompletedRectificationSuppressionRequest> {
    return this.httpClient.post<CompletedRectificationSuppressionRequest>(`${this.baseUrl}/right/postCompletedRectificationRequest`, completedRectificationRequest);
  }
}
