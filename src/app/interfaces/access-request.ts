interface DataSubjectCategory {
  dataSubjectCategoryName: string;
}

interface PrimaryKey {
  primaryKeyId: number;
  primaryKeyName: string;
}

interface Data {
  dataId: number;
  dataName: string;
  answerByData: boolean;
}

interface DataType {
  dataTypeName: string;
  primaryKeys: PrimaryKey[];
  data: Data[];
  answerByData?: boolean;
}

interface DataSubject {
  dataSubjectId: number;
  referenceId: number;
  dataSubjectCategory: DataSubjectCategory;
}

export interface AccessRequest {
  requestId: number;
  userClaim: string;
  issuedAt: Date;
  isIsolated: boolean;
  dataTypes: DataType[];
  dataSubject: DataSubject;
}
