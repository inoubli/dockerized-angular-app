import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Meal } from 'src/app/shared/models';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MealService {

  constructor(private apiService: ApiService) {}

  getMeal(id: number) {
    return this.apiService.get('meal/get/'+ id);
  }

  getMeals(pageNumber: number) {
    return this.apiService.get('meal/list?page='+pageNumber);
  }

  /**
   * Create one category
   *
   * @param data
   */
  create(data: Meal): Observable<Meal> {
    return this.apiService.post('meal/post', data).pipe(map( (data) => data));
  }

  getDdMeals() {
    return this.apiService.get('meal/ddlist');
  }
  
  update(data: Meal): Observable<Meal> {
    
    return this.apiService.put('meal/put/'+data.id, data).pipe(map( (data) => data));
  }

  deleteMeal(id: number) {
    return this.apiService.delete('meal/delete/'+ id);
  }

}
