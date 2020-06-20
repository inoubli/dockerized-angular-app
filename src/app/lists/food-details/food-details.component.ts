import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { FoodService } from 'src/app/core/services/food.service';

@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.css']
})
export class FoodDetailsComponent implements OnInit {
  imgPath:string = "../../../assets/uploads/";

  food$: any;
  get isLoading() {
    return this.loadingService['_pendingRequests'];
  }
  constructor(
    private activeRoute: ActivatedRoute,
    private foodService: FoodService,
    private loadingService : LoadingBarService) { }

  ngOnInit(): void {
    const idString = this.activeRoute.snapshot.paramMap.get('id');
    let idNumber : number =+ idString;

    this.foodService.getFood(idNumber).subscribe(
      data => { 
        this.food$ = data;
      },
      err => {
        alert(err['message']);
      }
    )
  }
   
  

}

