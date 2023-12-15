interface DataSubjectCategory {
  dataSubjectCategoryName: string;
}

export interface Request {
  requestId: number;
  requestType: string;
  issuedAt: Date;
  dataSubjectCategory: DataSubjectCategory;
  response: boolean;
}
