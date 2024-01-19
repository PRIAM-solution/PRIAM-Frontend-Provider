import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestData } from '../../../../../../interfaces/request-data';
import { RequestAnswer } from '../../../../../../interfaces/request-answer';
import {environment} from "../../../../../../../environment/environment";

@Injectable({
  providedIn: 'root'
})

export class GetAccessService {

  constructor(private httpClient: HttpClient) { }

  private baseUrl = environment.api_right;

  getSelectedAccessRequest(requestId: number, requestType: string): Observable<RequestData> {
    return this.httpClient.get<RequestData>(`${this.baseUrl}/right/requestDetail/${requestId}`);
  }

  getSelectedAccessRequestAnswer(requestId: number): Observable<RequestAnswer> {
    return this.httpClient.get<RequestAnswer>(`${this.baseUrl}/right/getSelectedAccessRequestAnswer`);
  }
}
