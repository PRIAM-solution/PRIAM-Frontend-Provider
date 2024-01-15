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

// export interface RequestData {
//   requestId: number;
//   userClaim: string;
//   issuedAt: Date;
//   newValue?: any; // A MODIF POUR GERER TOUS TYPES
//   isIsolated: boolean;
//   dataTypes: DataType[];
//   dataSubject: DataSubject;
// }

export interface RequestData {
  requestId: number;
  userClaim: string;
  issuedAt: Date;
  newValue?: any;
  isIsolated: boolean;
  datas: Data[];
  dataSubject: DataSubject;
}