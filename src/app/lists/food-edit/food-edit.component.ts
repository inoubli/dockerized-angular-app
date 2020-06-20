import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { ToastrService } from 'ngx-toastr';
import { FoodService, CategoryService } from 'src/app/core/services';
import { Category } from 'src/app/shared/models';

@Component({
  selector: 'app-food-edit',
  templateUrl: './food-edit.component.html',
  styleUrls: ['./food-edit.component.css']
})
export class FoodEditComponent implements OnInit {

  food$: any;
  idNumber: number;

  scores = [0,1,2,3,4,5,6,7,8,9,10];
  imgPath:string = "../../../assets/uploads/";
  file : File;
  // catMealsIds: number[] = [];
  foodForm: FormGroup;
  
  id: FormControl;
  name: FormControl;
  legend: FormControl;
  selected_score: FormControl;
  deselected_score: FormControl;
  description: FormControl;
  category_id: FormControl;
  image_url: FormControl;

  selectCategories: Category[] = [];

  get isLoading() {
    return this.loadingService['_pendingRequests'];
  }
  constructor(
    private activeRoute: ActivatedRoute,
    private foodService: FoodService,
    private categoryService: CategoryService,
    private router : Router, 
    private loadingService : LoadingBarService, 
    private toastr: ToastrService) { }


  ngOnInit(): void {
    this.initCategories();
    this.getFood();
  }

  getFood(): boolean{
    const idString = this.activeRoute.snapshot.paramMap.get('id');
    this.idNumber =+ idString;

    this.foodService.getFood(this.idNumber).subscribe(
      data => { 
        this.food$ = data;
        // this.getMealsIds(this.food$.meals);

      this.createFormControls();
      this.createForm();
      },
      err => {
        alert(err['message']);
      }
    );
    return true;
  }
  // getMealsIds(mealsElement: Meal[]){
  //   mealsElement.forEach(meal => {
  //     this.catMealsIds.push(meal.id);
  //   });
  // }

  /**
   * Initialize meals
   */
  initCategories() {
    this.categoryService.getDdCategories().subscribe(
      (res :Category[]) => {
        this.selectCategories =  res;
       },
       err => {
        alert(err['message']);
       }
     );
  }

  createFormControls(){
    this.id = new FormControl(this.food$.id);
    this.name = new FormControl(this.food$.name, [Validators.required,Validators.minLength(3)]);
    this.legend = new FormControl(this.food$.legend,[Validators.minLength(3)]);
    this.selected_score = new FormControl(this.food$.selected_score);
    this.deselected_score = new FormControl(this.food$.deselected_score);
    this.description = new FormControl(this.food$.description,[Validators.required,Validators.minLength(5)]);
    this.category_id = new FormControl(this.food$.category.id,Validators.required);
    this.image_url = new FormControl(this.food$.image_url);
  }
  createForm() {
    this.foodForm = new FormGroup({
      id: this.id,
      name: this.name,
      legend: this.legend,
      selected_score: this.selected_score,
      deselected_score: this.deselected_score,
      description: this.description,
      category_id: this.category_id,      
      image_url: this.image_url,      
    });
  }

  /**
   * Save new food
   */
  public submit() {
    this.id.setValue(this.idNumber);
    console.log(this.foodForm.value);

    this.foodService.update(this.foodForm.value, this.file).subscribe(
      (data) => {
      this.toastr.success('Successfuly updated', `Food ${data.name}`, { timeOut: 5000 , closeButton: true});
      this.router.navigateByUrl('/lists/foods');
      },
      err =>{
        this.toastr.error(err['message'], 'Error occured', { timeOut: 5000 , closeButton: true});
      });
  }

  onFileSelected(event) {
    if(event.target.files.length > 0) 
     {
        this.foodForm.patchValue({
          image_url: event.target.files[0].name
        });
        this.file = event.target.files[0];
        console.log(this.file);
     }
   }


}

