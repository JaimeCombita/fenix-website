import { apiService } from './api.service';
import { API_ENDPOINTS } from '../utils/constants';
import type { ContactForm, QuoteRequest } from '../types';

export const contactService = {
  async sendMessage(data: ContactForm): Promise<{ success: boolean; message: string }> {
    const response = await apiService.post<{ success: boolean; message: string }>(
      API_ENDPOINTS.contact,
      data
    );
    return response.data;
  },

  async requestQuote(data: QuoteRequest): Promise<{ success: boolean; message: string }> {
    const response = await apiService.post<{ success: boolean; message: string }>(
      API_ENDPOINTS.quote,
      data
    );
    return response.data;
  },
};
