export type LoginRequest = {
  email: string;
  password: string;
};

export type ResponseMetaDefault = {
  message?: string;
  hasNextPage?: boolean;
  total?: number;
  limit?: number;
  offset?: number;
  has_next_page?: boolean;
  has_previous_page?: boolean;
  cursors?: {
    prev?: string;
    next?: string;
  };
};

export type DataResponse<TData = unknown, TMeta = ResponseMetaDefault> = {
  data: TData;
  meta?: TMeta;
  code?: string;
};
