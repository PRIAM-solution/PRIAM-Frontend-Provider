import { AccessRequest } from '../../interfaces/access-request';
import { AccessRequestAnswer } from '../../interfaces/access-request-answer';

export const ACCESS_REQUEST: AccessRequest = {
  requestId: 1,
  userClaim: 'Data Access',
  issuedAt: new Date('2023-01-01T12:00:00'),
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
        { dataId: 2, dataName: 'Attribute2', answerByData: true },
      ],
    },
    {
      dataTypeName: 'Type2',
      primaryKeys: [
        { primaryKeyId: 3, primaryKeyName: 'Key3' },
        { primaryKeyId: 4, primaryKeyName: 'Key4' },
      ],
      data: [
        { dataId: 3, dataName: 'Attribute3', answerByData: true },
        { dataId: 4, dataName: 'Attribute4', answerByData: true },
        { dataId: 5, dataName: 'Attribute5', answerByData: true },
      ],
      answerByData: true,
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

export const ACCESS_REQUEST_ANSWER: AccessRequestAnswer = {
  requestId: 0,
  providerClaim: "Provider Claim",
  answerType: "Full",
  issuedAt: new Date('2023-10-01T12:00:00'),
}
