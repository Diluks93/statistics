export interface ApiRequestWeaklyData {
  days: Array<number>;
  total: number;
  week: number;
}

export interface ApiRequest {
  data: Array<ApiRequestWeaklyData>;
  headers: Record<string, string>;
  status: number;
  url: string;
}
