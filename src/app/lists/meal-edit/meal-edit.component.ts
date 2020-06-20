import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MealService } from 'src/app/core/services/meal.service';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-meal-edit',
  templateUrl: './meal-edit.component.html',
  styleUrls: ['./meal-edit.component.css']
})
export class MealEditComponent implements OnInit {

  meal$: any;
  idNumber: number;
  catMealsIds: number[] = [];
  mealForm: FormGroup;

  id: FormControl;
  name: FormControl;
  legend: FormControl;
  description: FormControl;
  meals: FormControl;


  get isLoading() {
    return this.loadingService['_pendingRequests'];
  }
  constructor(
    private activeRoute: ActivatedRoute,
    private mealService: MealService,
    private router : Router, 
    private loadingService : LoadingBarService, 
    private toastr: ToastrService) { }


  ngOnInit(): void {
    this.getMeal();
  }

  getMeal(): boolean{
    const idString = this.activeRoute.snapshot.paramMap.get('id');
    this.idNumber =+ idString;

    this.mealService.getMeal(this.idNumber).subscribe(
      data => { 
        this.meal$ = data;

      this.createFormControls();
      this.createForm();
      },
      err => {
        alert(err['message']);
      }
    );
    return true;
  }
  


  createFormControls(){
    this.id = new FormControl(this.meal$.id);
    this.name = new FormControl(this.meal$.name, [Validators.required,Validators.minLength(3)]);
    this.legend = new FormControl(this.meal$.legend,[Validators.minLength(3)]);
    this.description = new FormControl(this.meal$.description,[Validators.required,Validators.minLength(5)]);


  }
  createForm() {
    this.mealForm = new FormGroup({
      name: this.name,
      id: this.id,
      legend: this.legend,
      description: this.description,
    });
  }

  /**
   * Save new meal
   */
  public submit() {
    this.id.setValue(this.idNumber);
    this.mealService.update(this.mealForm.value).subscribe(
      (data) => {
      this.toastr.success('Successfuly updated', `Meal ${data.name}`, { timeOut: 5000 , closeButton: true});
      this.router.navigateByUrl('/lists/meals');
      },
      err =>{
        this.toastr.error(err['message'], 'Error occured', { timeOut: 5000 , closeButton: true});
      });
  }

}

