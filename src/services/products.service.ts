import { apiService } from './api.service';
import { API_ENDPOINTS } from '../utils/constants';
import type { Product, PaginatedResponse, ProductCategory } from '../types';

export const productsService = {
  async getAll(params?: {
    category?: ProductCategory;
    page?: number;
    limit?: number;
    search?: string;
  }): Promise<PaginatedResponse<Product>> {
    const queryParams = new URLSearchParams();
    
    if (params?.category) queryParams.append('category', params.category);
    if (params?.page) queryParams.append('page', params.page.toString());
    if (params?.limit) queryParams.append('limit', params.limit.toString());
    if (params?.search) queryParams.append('search', params.search);
    
    const endpoint = `${API_ENDPOINTS.products}?${queryParams.toString()}`;
    const response = await apiService.get<PaginatedResponse<Product>>(endpoint);
    
    return response.data;
  },

  async getById(id: string): Promise<Product> {
    const response = await apiService.get<Product>(`${API_ENDPOINTS.products}/${id}`);
    return response.data;
  },

  async getFeatured(): Promise<Product[]> {
    const response = await apiService.get<Product[]>(`${API_ENDPOINTS.products}/featured`);
    return response.data;
  },

  async getByCategory(category: ProductCategory): Promise<Product[]> {
    const response = await apiService.get<Product[]>(
      `${API_ENDPOINTS.products}/category/${category}`
    );
    return response.data;
  },

  async create(product: Omit<Product, 'id'>): Promise<Product> {
    const response = await apiService.post<Product>(API_ENDPOINTS.products, product);
    return response.data;
  },

  async update(id: string, product: Partial<Product>): Promise<Product> {
    const response = await apiService.put<Product>(
      `${API_ENDPOINTS.products}/${id}`,
      product
    );
    return response.data;
  },

  async delete(id: string): Promise<void> {
    await apiService.delete(`${API_ENDPOINTS.products}/${id}`);
  },
};
