interface DataSubjectCategory {
  dataSubjectCategoryId: number;
  dataSubjectCategoryName: string;
}

export interface RequestFilter {
  requestTypes: string[];
  requestResponses: string[];
  dataSubjectCategories: DataSubjectCategory[];
}
