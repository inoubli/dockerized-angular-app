import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MealService } from 'src/app/core/services/meal.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit {

  mealForm: FormGroup;

  name: FormControl;
  legend: FormControl;
  description: FormControl;

  constructor(private mealService: MealService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.createFormControls();
    this.createForm();
  }

  createFormControls(){
    this.name = new FormControl('', [Validators.required,Validators.minLength(3)]);
    this.legend = new FormControl('',[Validators.minLength(3)]);
    this.description = new FormControl('',[Validators.required,Validators.minLength(5)]);
  }
  createForm() {
    this.mealForm = new FormGroup({
      name: this.name,
      legend: this.legend,
      description: this.description,
    });
  }
  /**
   * Save new meal
   */
  public submit() {
    this.mealService.create(this.mealForm.value).subscribe(
      (data) => {
        this.toastr.success('Successfuly updated', `Meal ${data.name}`, { timeOut: 5000 , closeButton: true});  
        this.mealForm.reset();
      },
      err => {
        this.toastr.error(err['message'], 'Error occured', { timeOut: 10000 , closeButton: true});
      });
  }
}

