import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MealService } from 'src/app/core/services/meal.service';
import { LoadingBarService } from '@ngx-loading-bar/core';

@Component({
  selector: 'app-meal-details',
  templateUrl: './meal-details.component.html',
  styleUrls: ['./meal-details.component.css']
})
export class MealDetailsComponent implements OnInit {

  meal$: any;
  get isLoading() {
    return this.loadingService['_pendingRequests'];
  }
  constructor(
    private activeRoute: ActivatedRoute,
    private mealService: MealService,
    private loadingService : LoadingBarService) { }

  ngOnInit(): void {
    const idString = this.activeRoute.snapshot.paramMap.get('id');
    let idNumber : number =+ idString;

    this.mealService.getMeal(idNumber).subscribe(
      data => { 
        this.meal$ = data;
      },
      err => {
        alert(err['message']);
      }
    )
  }
   
  

}
