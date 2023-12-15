interface Data {
  dataId: number;
}

export interface CompletedAccessRequest {
  requestId: number;
  providerClaim: string;
  data: Data[];
}
