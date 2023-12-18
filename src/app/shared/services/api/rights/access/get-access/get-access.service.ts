import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccessRequest } from '../../../../../../interfaces/access-request';
import { AccessRequestAnswer } from '../../../../../../interfaces/access-request-answer';
import { environment } from "../../../../../../../environment/environment";

@Injectable({
  providedIn: 'root'
})

export class GetAccessService {

  constructor(private httpClient: HttpClient) { }

  private baseUrl = environment.api_url;

  getSelectedAccessRequest(requestId: number, requestType: string): Observable<AccessRequest> {
    return this.httpClient.get<AccessRequest>(`${this.baseUrl}/right/getSelectedAccessRequest`);
  }

  getSelectedAccessRequestAnswer(requestId: number): Observable<AccessRequestAnswer> {
    return this.httpClient.get<AccessRequestAnswer>(`${this.baseUrl}/right/getSelectedAccessRequestAnswer`);
  }
}
