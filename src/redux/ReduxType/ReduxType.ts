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
