// Shared types across all services

export interface ServiceResult<T> {
  data: T;
  error?: never;
}

export interface ServiceError {
  data?: never;
  error: {
    message: string;
    code?: string | number | undefined;
  };
}

export type AsyncServiceResult<T> = Promise<ServiceResult<T> | ServiceError>;

export interface PaginationParams {
  page?: number;
  limit?: number;
}

export interface PaginatedResult<T> {
  items: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

export interface BaseContent {
  id: string;
  title: string;
  createdAt: string;
  updatedAt?: string;
}

export interface Tag {
  name: string;
  count: number;
}
