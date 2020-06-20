import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/shared/models';
import { CategoryService } from 'src/app/core/services';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent implements OnInit {
  categories : Category[] = [];
  totalItems : number;
  itemsPerPage : number;
  page : number = 1;
  get isLoading() {
    return this.loadingService['_pendingRequests'];
  }
  constructor(private categoryService : CategoryService, private loadingService : LoadingBarService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.loadCategories(this.page);
  }

  loadCategories(pageNumber : number){
    this.categoryService.getCategories(pageNumber).subscribe(
      (res :any) => {
        this.categories =  res["categories"];
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
    this.categoryService.deleteCategory(id).subscribe(
      data => { 
        this.toastr.success('Successfuly deleted', `Category ${data.name}`, { timeOut: 5000 , closeButton: true});
        this.loadCategories(1);
      },
      err => {
        this.toastr.error(err['message'], 'Error occured', { timeOut: 10000 , closeButton: true});
      }
    )
  }

  pageChanged(event){
    this.loadCategories(event);
  }

}
