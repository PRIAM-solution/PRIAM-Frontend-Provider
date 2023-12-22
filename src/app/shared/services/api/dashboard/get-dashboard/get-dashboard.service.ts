import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataSubjectCategory } from '../../../../../interfaces/data-subject-category';
import { RequestFilter } from '../../../../../interfaces/request-filter';
import { Request } from '../../../../../interfaces/request';
import { SelectedRequest } from '../../../../../interfaces/selected-request';

@Injectable({
  providedIn: 'root'
})
export class GetDashboardService {
  constructor(private httpClient: HttpClient) { }

  private baseUrl = 'http://localhost:8080';
  selectedRequest!: SelectedRequest;

  getDataSubjectCategory(): Observable<DataSubjectCategory[]> {
    return this.httpClient.get<DataSubjectCategory[]>(`${this.baseUrl}/actor/getDataSubjectCategory`);
  }

  getFilteredRequests(requestFilter: RequestFilter): Observable<Request[]> {
    return this.httpClient.get<Request[]>(`${this.baseUrl}/right/getRequests`);
  }
}
