export interface Food {
    id: number;
    name: string;
    description?: string;
    legend: string;
    selected_score: number;
    deselected_score: number;
    image_url: string;
    category_id: number;

  }
  