export interface TApiResponse {
  statusCode: number;
  success: boolean;
  message: string;
  data: TCategory[] | TMovie[];
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

export interface TMovie {
  _id: string;
  title: string;
  description: string;
  releaseYear: string;
  rating: string;
  stars: string[];
  category: string;
  quality?: "high" | "low" | "medium";
  genre?: string[];
  language?: string[];
  tags?: string[];
  cast?: string[];
  movieLink?: string[];
  trailerLink?: string;
}

export interface TApiRequest {
  statusCode: number;
  success: boolean;
  message: string;
  data: {
    result?: TMovie[];
    languages?: TCategory[];
    genres?: TCategory[];
    categories?: TCategory[];
    movies?: TMovie[];
  };
}
