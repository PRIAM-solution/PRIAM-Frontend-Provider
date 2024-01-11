import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestData } from '../../../../../../interfaces/request-data';
import { RequestAnswer } from '../../../../../../interfaces/request-answer';
import { CurrentValue } from '../../../../../../interfaces/current-value';

@Injectable({
  providedIn: 'root'
})
export class GetRectificationService {

  constructor(private httpClient: HttpClient) { }

  private baseUrl = 'http://localhost:8080';

  getSelectedRectificationRequest(requestId: number, requestType: string): Observable<RequestData> {
    return this.httpClient.get<RequestData>(`${this.baseUrl}/right/getSelectedRectificationRequest`);
  }

  getSelectedRectificationRequestAnswer(requestId: number): Observable<RequestAnswer> {
    return this.httpClient.get<RequestAnswer>(`${this.baseUrl}/right/getSelectedRectificationRequestAnswer`);
  }

  getCurrentValue(dataId: number): Observable<CurrentValue> {
    return this.httpClient.get<CurrentValue>(`${this.baseUrl}/right/getCurrentValue`);
  }
}
