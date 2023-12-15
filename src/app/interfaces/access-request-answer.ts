export interface AccessRequestAnswer {
  requestId: number;
  providerClaim: string;
  answerType: string;
  issuedAt: Date;
}
