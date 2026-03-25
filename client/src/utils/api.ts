const API_BASE = import.meta.env.VITE_API_BASE_URL as string;

export interface ApiResponse<T = unknown> {
  ok: boolean;
  status: number;
  data: T;
}

export async function api<T = unknown>(
  path: string,
  options: {method?: string; body?: unknown} = {},
): Promise<ApiResponse<T>> {
  const {method = 'GET', body} = options;

  const response = await fetch(`${API_BASE}${path}`, {
    method,
    headers: body !== undefined ? {'Content-Type': 'application/json'} : {},
    body: body !== undefined ? JSON.stringify(body) : undefined,
  });

  const data = (await response.json()) as T;

  return {ok: response.ok, status: response.status, data};
}
