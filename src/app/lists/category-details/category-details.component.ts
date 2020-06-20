import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { CategoryService } from 'src/app/core/services';
import { LoadingBarService } from '@ngx-loading-bar/core';


@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent implements OnInit {
  
  category$: any;
  get isLoading() {
    return this.loadingService['_pendingRequests'];
  }
  constructor(
    private activeRoute: ActivatedRoute,
    private categoryService: CategoryService,
    private loadingService : LoadingBarService) { }

  ngOnInit(): void {
    const idString = this.activeRoute.snapshot.paramMap.get('id');
    let idNumber : number =+ idString;

    this.categoryService.getCategory(idNumber).subscribe(
      data => { 
        this.category$ = data;
      },
      err => {
        alert(err['message']);
      }
    )
  }
   
  

}
