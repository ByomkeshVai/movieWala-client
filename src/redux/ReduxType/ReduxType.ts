export interface TApiResponse {
  statusCode: number;
  success: boolean;
  message: string;
  data: TCategory[]; // Change to an array of categories
}

interface TCategory {
  _id: string;
  category: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface TApiRequest {
  statusCode: number;
  success: boolean;
  message: string;
  data: {
    categories: TCategory[];
  };
}
