export interface TApiResponse {
  statusCode: number;
  success: boolean;
  message: string;
  data: {
    category: string;
    _id: string;
    createdAt: string;
    updatedAt: string;
  };
}

interface TCategory {
  _id: string;
  category: string;
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
