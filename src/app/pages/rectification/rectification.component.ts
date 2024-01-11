import { Component, OnInit } from '@angular/core';
import { GetRectificationService } from '../../shared/services/api/rights/rectification/get-rectification/get-rectification.service';
import { PostRectificationService } from '../../shared/services/api/rights/rectification/post-rectification/post-rectification.service';
import { GetDashboardService } from '../../shared/services/api/dashboard/get-dashboard/get-dashboard.service';
import { RequestData } from '../../interfaces/request-data';
import { RequestAnswer } from '../../interfaces/request-answer';
import { CurrentValue } from '../../interfaces/current-value';
import { CompletedRectificationSuppressionRequest } from '../../interfaces/completed-rectification-suppression-request';
import { SuccessErrorService } from '../../shared/services/success-error/success-error.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RECTIFICATION_REQUEST } from './exemple-tempo';
import { RECTIFICATION_REQUEST_ANSWER } from './exemple-tempo';
import { CURRENT_VALUE } from './exemple-tempo';

@Component({
  selector: 'app-rectification',
  templateUrl: './rectification.component.html',
  styleUrls: ['./rectification.component.css']
})
export class RectificationComponent {
  rectificationRequest: RequestData = RECTIFICATION_REQUEST;
  rectificationRequestAnswer: RequestAnswer = RECTIFICATION_REQUEST_ANSWER;
  response!: boolean;
  providerAnswer!: boolean;
  providerClaim: string = 'CLAIM!';
  currentValue: CurrentValue = CURRENT_VALUE;

  constructor(
    private getRectificationService: GetRectificationService,
    private postRectificationService: PostRectificationService,
    private getDashboardService: GetDashboardService,
    private successErrorService: SuccessErrorService,
    private _snackBar: MatSnackBar,
  ) {}

  ngOnInit() {
    this.response = this.getDashboardService.selectedRequest.response;
    this.getSelectedRectificationRequest();
    if (this.response) {
      this.getSelectedRectificationRequestAnswer();
    }
    else {
      this.getCurrentValue();
    }
  }

  getSelectedRectificationRequest() {
    this.getRectificationService.getSelectedRectificationRequest(
      this.getDashboardService.selectedRequest.requestId,
      this.getDashboardService.selectedRequest.requestType
    ).subscribe(
      response => {
        this.rectificationRequest = response;
        this.successErrorService.handleSuccess('getSelectedRectificationRequest', response);
      },
      error => {
        this.successErrorService.handleError('getSelectedRectificationRequest', error);
      }
    );
  }

  getSelectedRectificationRequestAnswer() {
    this.getRectificationService.getSelectedRectificationRequestAnswer(this.getDashboardService.selectedRequest.requestId).subscribe(
      response => {
        this.rectificationRequestAnswer = response;
        this.successErrorService.handleSuccess('getSelectedRectificationRequestAnswer', response);
      },
      error => {
        this.successErrorService.handleError('getSelectedRectificationRequestAnswer', error);
      }
    );
  }

  getCurrentValue() {
    this.getRectificationService.getCurrentValue(this.rectificationRequest.dataTypes[0].data[0].dataId).subscribe(
      response => {
        this.currentValue = response;
        this.successErrorService.handleSuccess('getCurrentValue', response);
      },
      error => {
        this.successErrorService.handleError('getCurrentValue', error);
      }
    );
  }

  postCompletedRectificationRequest() {
    const completedRectificationRequest: CompletedRectificationSuppressionRequest = {
      requestId: 0,
      providerClaim: this.providerClaim,
      answer: this.providerAnswer,
    };

    this.postRectificationService.postCompletedRectificationRequest(completedRectificationRequest).subscribe(
      response => {
        const message = 'Success!';
        const action = 'X';
        this._snackBar.open(message, action);
        console.log("[Success] postCompletedRectificationRequest()", response);
      },
      error => {
        const message = 'Error..';
        const action = 'X';
        this._snackBar.open(message, action);
        console.log("[Error] postCompletedRectificationRequest()", error);
      }
    );
  }
}
