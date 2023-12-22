import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestData } from '../../../../../../interfaces/request-data';
import { RequestAnswer } from '../../../../../../interfaces/request-answer';
import { CurrentValue } from '../../../../../../interfaces/current-value';

@Injectable({
  providedIn: 'root'
})
export class GetSuppressionService {

  constructor(private httpClient: HttpClient) { }

  private baseUrl = 'http://localhost:8080';

  getSelectedSuppressionRequest(requestId: number, requestType: string): Observable<RequestData> {
    return this.httpClient.get<RequestData>(`${this.baseUrl}/right/getSelectedSuppressionRequest`);
  }

  getSelectedSuppressionRequestAnswer(requestId: number): Observable<RequestAnswer> {
    return this.httpClient.get<RequestAnswer>(`${this.baseUrl}/right/getSelectedSuppressionRequestAnswer`);
  }

  getCurrentValue(dataId: number): Observable<CurrentValue> {
    return this.httpClient.get<CurrentValue>(`${this.baseUrl}/right/getCurrentValue`);
  }
}
