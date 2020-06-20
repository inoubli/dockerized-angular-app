import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Category } from 'src/app/shared/models/';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  
  constructor(private apiService: ApiService) {}
  
  getCategory(id: number) {
    return this.apiService.get('category/get/'+ id);
  }

  getCategories(pageNumber: number) {
    return this.apiService.get('category/list?page='+pageNumber);
  }
  // Populate DropDownList with Categories
  getDdCategories() {
    return this.apiService.get('category/ddlist');
  }

  create(data: Category): Observable<Category> {
    let json = [];
    let meals =  {'meals':data.meals} ;
    delete data.meals;
    json.push(data);
    json.push(meals);
    
    return this.apiService.post('category/post', json).pipe(map( (data) => data));
  }

  update(data: Category): Observable<Category> {
    let json = [];
    let meals =  {'meals':data.meals} ;
    delete data.meals;
    json.push(data);
    json.push(meals);
    
    return this.apiService.put('category/put/'+data.id, json).pipe(map( (data) => data));
  }

  deleteCategory(id: number) {
    return this.apiService.delete('category/delete/'+ id);
  }
  
}
