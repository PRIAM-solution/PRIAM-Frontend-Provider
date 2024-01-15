import {DataSubjectCategory} from "./data-subject-category";

export interface Request {
  requestId: number;
  requestType: string;
  issuedAt: Date;
  dataSubjectCategory: DataSubjectCategory;
  response: boolean;
}
