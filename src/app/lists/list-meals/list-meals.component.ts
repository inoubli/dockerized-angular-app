import { Component, OnInit } from '@angular/core';
import { MealService } from 'src/app/core/services/meal.service';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { ToastrService } from 'ngx-toastr';
import { Meal } from 'src/app/shared/models';

@Component({
  selector: 'app-list-meals',
  templateUrl: './list-meals.component.html',
  styleUrls: ['./list-meals.component.css']
})
export class ListMealsComponent implements OnInit {
  
  meals : Meal[] = [];
  totalItems : number;
  itemsPerPage : number;
  page : number = 1;
  get isLoading() {
    return this.loadingService['_pendingRequests'];
  }
  constructor(private mealsService : MealService, private loadingService : LoadingBarService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.loadMeals(this.page);
  }

  loadMeals(pageNumber : number){
    this.mealsService.getMeals(pageNumber).subscribe(
      (res :any) => {
        this.meals =  res["meals"];
        this.totalItems = res["total"];
        this.page = res["currentPage"];
        this.itemsPerPage = res["limit"];
       },
       err => {
        alert(err['message']);
       }
     );
  }

  delete(id) {
    this.mealsService.deleteMeal(id).subscribe(
      data => { 
        this.toastr.success('Successfuly deleted', `Meal ${data.name}`, { timeOut: 5000 , closeButton: true});
        this.loadMeals(1);
      },
      err => {
        this.toastr.error(err['message'], 'Error occured', { timeOut: 10000 , closeButton: true});
      }
    )
  }

  pageChanged(event){
    this.loadMeals(event);
  }

}

