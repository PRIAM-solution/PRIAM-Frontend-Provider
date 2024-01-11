import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestData } from '../../../../../../interfaces/request-data';
import { RequestAnswer } from '../../../../../../interfaces/request-answer';

@Injectable({
  providedIn: 'root'
})

export class GetAccessService {

  constructor(private httpClient: HttpClient) { }

  private baseUrl = 'http://localhost:8080';

  getSelectedAccessRequest(requestId: number, requestType: string): Observable<RequestData> {
    return this.httpClient.get<RequestData>(`${this.baseUrl}/right/getSelectedAccessRequest`);
  }

  getSelectedAccessRequestAnswer(requestId: number): Observable<RequestAnswer> {
    return this.httpClient.get<RequestAnswer>(`${this.baseUrl}/right/getSelectedAccessRequestAnswer`);
  }
}
