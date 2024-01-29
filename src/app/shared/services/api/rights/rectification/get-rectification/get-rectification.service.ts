import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {DataValue, RequestData} from '../../../../../../interfaces/request-data';
import { RequestAnswer } from '../../../../../../interfaces/request-answer';
import { CurrentValue } from '../../../../../../interfaces/current-value';
import {environment} from "../../../../../../../environment/environment";

@Injectable({
  providedIn: 'root'
})
export class GetRectificationService {

  constructor(private httpClient: HttpClient) { }

  private baseUrlRight = environment.api_right;
  private baseUrlProvider = environment.api_provider;

  getSelectedRectificationRequest(requestId: number, requestType: string): Observable<RequestData> {
    return this.httpClient.get<RequestData>(`${this.baseUrlRight}/right/requestDetail/${requestId}`);
  }

  getSelectedRectificationRequestAnswer(requestId: number): Observable<RequestAnswer> {
    return this.httpClient.get<RequestAnswer>(`${this.baseUrlRight}/right/answer/${requestId}`);
  }

  getCurrentValue(referenceId: string, attributeName: string, primaryKeys: Map<String, String>): Observable<DataValue> {
    let data = {
      referenceId: referenceId,
      attributeName: attributeName,
      primaryKeys: primaryKeys
    }
    return this.httpClient.post<DataValue>(`${this.baseUrlProvider}/api/dataValue`, data);
  }
}
