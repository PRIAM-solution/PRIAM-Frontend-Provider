import { Component, OnInit } from '@angular/core';
import { GetSuppressionService } from '../../shared/services/api/rights/suppression/get-suppression/get-suppression.service';
import { PostSuppressionService } from '../../shared/services/api/rights/suppression/post-suppression/post-suppression.service';
import { GetDashboardService } from '../../shared/services/api/dashboard/get-dashboard/get-dashboard.service';
import { RequestData } from '../../interfaces/request-data';
import { CurrentValue } from '../../interfaces/current-value';
import { RequestAnswer } from '../../interfaces/request-answer';
import { CompletedRectificationSuppressionRequest } from '../../interfaces/completed-rectification-suppression-request';
import { SuccessErrorService } from '../../shared/services/success-error/success-error.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-suppression',
  templateUrl: './suppression.component.html',
  styleUrls: ['./suppression.component.css']
})
export class SuppressionComponent {
  suppressionRequest!: RequestData;
  suppressionRequestAnswer!: RequestAnswer;
  response!: boolean;
  providerAnswer!: boolean;
  providerClaim: string = 'CLAIM!';
  currentValue!: CurrentValue;

  constructor(
    private getSuppressionService: GetSuppressionService,
    private postSuppressionService: PostSuppressionService,
    private getDashboardService: GetDashboardService,
    private successErrorService: SuccessErrorService,
    private _snackBar: MatSnackBar,
  ) {}

  ngOnInit() {
    this.response = this.getDashboardService.selectedRequest.response;
    this.getSelectedSuppressionRequest();
    if (this.response) {
      this.getSelectedSuppressionRequestAnswer();
    }
  }

  getSelectedSuppressionRequest() {
    this.getSuppressionService.getSelectedSuppressionRequest(
      this.getDashboardService.selectedRequest.requestId,
      this.getDashboardService.selectedRequest.requestType
    ).subscribe(
      response => {
        this.suppressionRequest = response;
        this.successErrorService.handleSuccess('getSelectedSuppressionRequest', response);
      },
      error => {
        this.successErrorService.handleError('getSelectedSuppressionRequest', error);
      }
    );
  }

  getSelectedSuppressionRequestAnswer() {
    this.getSuppressionService.getSelectedSuppressionRequestAnswer(this.getDashboardService.selectedRequest.requestId).subscribe(
      response => {
        this.suppressionRequestAnswer = response;
        this.successErrorService.handleSuccess('getSelectedSuppressionRequestAnswer', response);
      },
      error => {
        this.successErrorService.handleError('getSelectedSuppressionRequestAnswer', error);
      }
    );
  }

  getCurrentValue() {
    this.getSuppressionService.getCurrentValue(this.suppressionRequest.dataTypes[0].data[0].dataId).subscribe(
      response => {
        this.currentValue = response;
        this.successErrorService.handleSuccess('getCurrentValue', response);
      },
      error => {
        this.successErrorService.handleError('getCurrentValue', error);
      }
    );
  }

  postCompletedSuppressionRequest() {
    const completedSuppressionRequest: CompletedRectificationSuppressionRequest = {
      requestId: 0,
      providerClaim: this.providerClaim,
      answer: this.providerAnswer,
    };

    this.postSuppressionService.postCompletedSuppressionRequest(completedSuppressionRequest).subscribe(
      response => {
        const message = 'Success!';
        const action = 'X';
        this._snackBar.open(message, action);
        console.log("[Success] postCompletedSuppressionRequest()", response);
      },
      error => {
        const message = 'Error..';
        const action = 'X';
        this._snackBar.open(message, action);
        console.log("[Error] postCompletedSuppressionRequest()", error);
      }
    );
  }
}
