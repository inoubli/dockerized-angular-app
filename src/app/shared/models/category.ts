import { Meal } from './meal';

export interface Category {
  id: number;
  name: string;
  description?: string;
  legend: string;
  created_at: string;
  updated_at: string;
  meals: Meal[];
}
