import { RequestData } from '../../interfaces/request-data';
import { RequestAnswer } from '../../interfaces/request-answer';
import { CurrentValue } from '../../interfaces/current-value';

export const RECTIFICATION_REQUEST: RequestData = {
  requestId: 1,
  userClaim: 'Data Access',
  issuedAt: new Date('2023-01-01T12:00:00'),
  newValue: "je veux changer en ca!",
  isIsolated: false,
  dataTypes: [
    {
      dataTypeName: 'Type1',
      primaryKeys: [
        { primaryKeyId: 1, primaryKeyName: 'Key1' },
        { primaryKeyId: 2, primaryKeyName: 'Key2' },
      ],
      answerByData: true,
      data: [
        { dataId: 1, dataName: 'Attribute1', answerByData: true },
      ],
    },
  ],
  dataSubject: {
    dataSubjectId: 0,
    referenceId: 101,
    dataSubjectCategory: {
      dataSubjectCategoryName: 'Category1'
    },
  },
}

export const RECTIFICATION_REQUEST_ANSWER: RequestAnswer = {
  requestId: 0,
  providerClaim: "Provider Claim",
  answerType: "Accepted",
  issuedAt: new Date('2023-10-01T12:00:00'),
}

export const CURRENT_VALUE: CurrentValue = {
  currentValue: "C'est comme ca actuellement",
}
