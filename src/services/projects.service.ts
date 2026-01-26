import { apiService } from './api.service';
import { API_ENDPOINTS } from '../utils/constants';
import type { Project } from '../types';

export const projectsService = {
  async getAll(): Promise<Project[]> {
    const response = await apiService.get<Project[]>(API_ENDPOINTS.projects);
    return response.data;
  },

  async getById(id: string): Promise<Project> {
    const response = await apiService.get<Project>(`${API_ENDPOINTS.projects}/${id}`);
    return response.data;
  },

  async create(project: Omit<Project, 'id'>): Promise<Project> {
    const response = await apiService.post<Project>(API_ENDPOINTS.projects, project);
    return response.data;
  },
};
