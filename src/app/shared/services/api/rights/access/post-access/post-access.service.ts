import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CompletedAccessRequest } from '../../../../../../interfaces/completed-access-request';

@Injectable({
  providedIn: 'root'
})
export class PostAccessService {
  constructor(private httpClient: HttpClient) { }

  private baseUrl = 'http://localhost:8080';

  postCompletedAccessRequest(completedAccessRequest: CompletedAccessRequest): Observable<CompletedAccessRequest> {
    return this.httpClient.post<CompletedAccessRequest>(`${this.baseUrl}/right/postCompletedAccessRequest`, completedAccessRequest);
  }
}
