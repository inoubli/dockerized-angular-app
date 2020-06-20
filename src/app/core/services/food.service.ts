import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Food } from 'src/app/shared/models';
import { ApiService } from './api.service';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private apiService: ApiService, private http: HttpClient) { }

  getFood(id: number) {
    return this.apiService.get('food/get/'+ id);
  }

   /**
   * Create one food
   * @param data
   */
  create(data: Food, file: File): Observable<any> {
    
    let json = [];
    let category_id = {'category_id':(data.category_id).toString()} ;
    delete data.category_id;
    json.push(data);
    json.push(category_id);

   if (file != null || file != undefined) {
    var formData: any = new FormData();
    formData.append('file', file, data.image_url);
    formData.append('json', JSON.stringify(json));
    console.log(formData); 
   }

    // for (var pair of formData.entries()) {
    //   console.log(pair[0]); 
    //   console.log(pair[1]); 
    // }
   return this.apiService.post('food/post', formData).pipe(map( (data) => data));
   }   

   getFoods(pageNumber: number) {
    return this.apiService.get('food/list?page='+pageNumber);
  }

  update(data: Food, file: File): Observable<Food> {
    let json = [];
    let category_id = {'category_id':(data.category_id).toString()} ;
    delete data.category_id;
    json.push(data);
    json.push(category_id);

    if (file != null || file != undefined) {
      var formData: any = new FormData();
      formData.append('file', file, data.image_url);
      formData.append('json', JSON.stringify(json));
      console.log(formData); 
     }
    
    return this.apiService.post('food/post/'+data.id, formData).pipe(map( (data) => data));
  }

  deleteFood(id: number) {
    return this.apiService.delete('food/delete/'+ id);
  }
}
