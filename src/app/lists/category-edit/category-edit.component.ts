import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/core/services';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Meal } from 'src/app/shared/models';
import { MealService } from 'src/app/core/services/meal.service';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {
  category$: any;
  idNumber: number;
  catMealsIds: number[] = [];
  categoryForm: FormGroup;

  id: FormControl;
  name: FormControl;
  legend: FormControl;
  description: FormControl;
  meals: FormControl;

  selectMeals: Meal[] = [];

  get isLoading() {
    return this.loadingService['_pendingRequests'];
  }
  constructor(
    private activeRoute: ActivatedRoute,
    private categoryService: CategoryService,
    private mealService: MealService,
    private router : Router, 
    private loadingService : LoadingBarService, 
    private toastr: ToastrService) { }


  ngOnInit(): void {
    this.initMeals();
    this.getCategory();
  }

  getCategory(): boolean{
    const idString = this.activeRoute.snapshot.paramMap.get('id');
    this.idNumber =+ idString;

    this.categoryService.getCategory(this.idNumber).subscribe(
      data => { 
        this.category$ = data;
        this.getMealsIds(this.category$.meals);

      this.createFormControls();
      this.createForm();
      },
      err => {
        alert(err['message']);
      }
    );
    return true;
  }
  getMealsIds(mealsElement: Meal[]){
    mealsElement.forEach(meal => {
      this.catMealsIds.push(meal.id);
    });
  }

  /**
   * Initialize meals
   */
  initMeals() {
    this.mealService.getDdMeals().subscribe(
      (res :Meal[]) => {
        this.selectMeals =  res;
       },
       err => {
        alert(err['message']);
       }
     );
  }

  createFormControls(){
    this.id = new FormControl(this.category$.id);
    this.name = new FormControl(this.category$.name, [Validators.required,Validators.minLength(3)]);
    this.legend = new FormControl(this.category$.legend,[Validators.minLength(3)]);
    this.description = new FormControl(this.category$.description,[Validators.required,Validators.minLength(5)]);
    this.meals = new FormControl(this.catMealsIds,Validators.required);


  }
  createForm() {
    this.categoryForm = new FormGroup({
      name: this.name,
      id: this.id,
      legend: this.legend,
      description: this.description,
      meals: this.meals      
    });
  }

  /**
   * Save new category
   */
  public submit() {
    this.id.setValue(this.idNumber);
    this.categoryService.update(this.categoryForm.value).subscribe(
      (data) => {
      this.toastr.success('Successfuly updated', `Category ${data.name}`, { timeOut: 5000 , closeButton: true});
      this.router.navigateByUrl('/lists/categories');
      },
      err =>{
        this.toastr.error(err['message'], 'Error occured', { timeOut: 5000 , closeButton: true});
      });
  }

}

