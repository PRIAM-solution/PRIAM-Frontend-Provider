import { DataSubjectCategory } from '../../interfaces/data-subject-category';
import { Request } from '../../interfaces/request';

export const DATA_SUBJECT_CATEGORY: DataSubjectCategory[] = [
  {
    dataSubjectCategoryId: 0,
    dataSubjectCategoryName: 'Category1',
  },
  {
    dataSubjectCategoryId: 1,
    dataSubjectCategoryName: 'Category2'
  },
  {
    dataSubjectCategoryId: 2,
    dataSubjectCategoryName: 'Category3'
  },
  // Add more entries as needed
];

export const REQUESTS: Request[] = [
  {
    requestId: 1,
    requestType: 'Access',
    issuedAt: new Date(), // Set to current date
    dataSubjectCategory: {
      dataSubjectCategoryName: 'Category0',
    },
    response: false,
  },
  {
    requestId: 2,
    requestType: 'Rectification',
    issuedAt: new Date(), // Set to current date
    dataSubjectCategory: {
      dataSubjectCategoryName: 'Category1',
    },
    response: false,
  },
  {
    requestId: 3,
    requestType: 'Suppression',
    issuedAt: new Date(), // Set to current date
    dataSubjectCategory: {
      dataSubjectCategoryName: 'Category2',
    },
    response: false,
  },
  {
    requestId: 4,
    requestType: 'Access',
    issuedAt: new Date(new Date().setDate(new Date().getDate() - 40)), // 40 days ago
    dataSubjectCategory: {
      dataSubjectCategoryName: 'Category3',
    },
    response: true,
  },
  {
    requestId: 5,
    requestType: 'Rectification',
    issuedAt: new Date(new Date().setDate(new Date().getDate() - 22)), // 22 days ago
    dataSubjectCategory: {
      dataSubjectCategoryName: 'Category4',
    },
    response: false,
  },
  {
    requestId: 6,
    requestType: 'Suppression',
    issuedAt: new Date(new Date().setDate(new Date().getDate() - 70)), // 70 days ago
    dataSubjectCategory: {
      dataSubjectCategoryName: 'Category5',
    },
    response: true,
  },
  {
    requestId: 7,
    requestType: 'Access',
    issuedAt: new Date(new Date().setDate(new Date().getDate() - 20)), // 20 days ago
    dataSubjectCategory: {
      dataSubjectCategoryName: 'Category6',
    },
    response: false,
  },
  {
    requestId: 8,
    requestType: 'Rectification',
    issuedAt: new Date(new Date().setDate(new Date().getDate() - 15)), // 15 days ago
    dataSubjectCategory: {
      dataSubjectCategoryName: 'Category7',
    },
    response: true,
  },
  {
    requestId: 9,
    requestType: 'Suppression',
    issuedAt: new Date(new Date().setDate(new Date().getDate() - 40)), // 40 days ago
    dataSubjectCategory: {
      dataSubjectCategoryName: 'Category8',
    },
    response: false,
  },
  {
    requestId: 10,
    requestType: 'Access',
    issuedAt: new Date(new Date().setDate(new Date().getDate() - 30)), // 30 days ago
    dataSubjectCategory: {
      dataSubjectCategoryName: 'Category0',
    },
    response: true,
  },
  {
    requestId: 11,
    requestType: 'Access',
    issuedAt: new Date(new Date().setDate(new Date().getDate() - 15)), // 15 days ago
    dataSubjectCategory: {
      dataSubjectCategoryName: 'Category9',
    },
    response: true,
  },
  {
    requestId: 12,
    requestType: 'Rectification',
    issuedAt: new Date(new Date().setDate(new Date().getDate() - 22)), // 22 days ago
    dataSubjectCategory: {
      dataSubjectCategoryName: 'Category10',
    },
    response: false,
  },
  {
    requestId: 13,
    requestType: 'Suppression',
    issuedAt: new Date(new Date().setDate(new Date().getDate() - 25)), // 25 days ago
    dataSubjectCategory: {
      dataSubjectCategoryName: 'Category11',
    },
    response: true,
  },
  {
    requestId: 14,
    requestType: 'Access',
    issuedAt: new Date(new Date().setDate(new Date().getDate() - 30)), // 30 days ago
    dataSubjectCategory: {
      dataSubjectCategoryName: 'Category12',
    },
    response: false,
  },
  {
    requestId: 15,
    requestType: 'Rectification',
    issuedAt: new Date(new Date().setDate(new Date().getDate() - 25)), // 25 days ago
    dataSubjectCategory: {
      dataSubjectCategoryName: 'Category13',
    },
    response: true,
  },
];
