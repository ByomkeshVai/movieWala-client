export interface TApiResponse {
  statusCode: number;
  success: boolean;
  message: string;
  data: TCategory[];
}

interface TCategory {
  _id: string;
  category?: string;
  genre?: string;
  language?: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface TApiRequest {
  statusCode: number;
  success: boolean;
  message: string;
  data: {
    languages?: TCategory[];
    genres?: TCategory[];
    categories?: TCategory[];
  };
}
