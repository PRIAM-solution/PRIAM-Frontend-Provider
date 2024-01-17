interface PrimaryKey {
  primaryKeyId: number;
  primaryKeyName: string;
}

interface Data {
  dataId: number;
  attributeName: string;
  answerByData: boolean;
  primaryKeys: Map<String, String>;
}

interface DataType {
  dataTypeName: string;
  primaryKeys: PrimaryKey[];
  data: Data[];
  answerByData?: boolean;
}

interface DataSubject {
  dataSubjectId: number;
  referenceId: string;
  dataSubjectCategoryName: string;
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
  typeRequest: String;
  response: boolean;
  claim: string;
  issuedAt: Date;
  newValue?: any;
  isIsolated: boolean;
  dataSubject: DataSubject;
  dataTypeList: DataType[];
}

export interface DataValue {
  value: String
}