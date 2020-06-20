import { Component, OnInit } from '@angular/core';
import { Food } from 'src/app/shared/models';
import { FoodService } from 'src/app/core/services';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-foods',
  templateUrl: './list-foods.component.html',
  styleUrls: ['./list-foods.component.css']
})
export class ListFoodsComponent implements OnInit {

  foods : Food[] = [];
  totalItems : number;
  itemsPerPage : number;
  page : number = 1;
  get isLoading() {
    return this.loadingService['_pendingRequests'];
  }
  constructor(private foodService : FoodService, private loadingService : LoadingBarService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.loadFoods(this.page);
  }

  loadFoods(pageNumber : number){
    this.foodService.getFoods(pageNumber).subscribe(
      (res :any) => {
        this.foods =  res["foods"];
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
    this.foodService.deleteFood(id).subscribe(
      data => { 
        this.toastr.success('Successfuly deleted', `Food ${data.name}`, { timeOut: 5000 , closeButton: true});
        this.loadFoods(1);
      },
      err => {
        this.toastr.error(err['message'], 'Error occured', { timeOut: 10000 , closeButton: true});
      }
    )
  }

  pageChanged(event){
    this.loadFoods(event);
  }

}
