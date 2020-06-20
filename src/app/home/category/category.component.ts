import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Meal } from 'src/app/shared/models';
import { MEALS } from 'src/app/core/mocks';
import { CategoryService } from 'src/app/core/services';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  categoryForm: FormGroup;

  name: FormControl;
  legend: FormControl;
  description: FormControl;
  meals: FormControl;



  mockMeals: Meal[] = [];

  constructor(private categroyService: CategoryService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.initMeal();
    this.createFormControls();
    this.createForm();
  }
  /**
   * Initialize meals
   */
  public initMeal() {
    this.mockMeals = MEALS;
  }

  createFormControls(){
    this.name = new FormControl('', [Validators.required,Validators.minLength(3)]);
    this.legend = new FormControl('',[Validators.minLength(3)]);
    this.description = new FormControl('',[Validators.required,Validators.minLength(5)]);
    this.meals = new FormControl('',Validators.required);
  }
  createForm() {
    this.categoryForm = new FormGroup({
      name: this.name,
      legend: this.legend,
      description: this.description,
      meals: this.meals      
    });
  }
  /**
   * Save new category
   */
  public submit() {
    this.categroyService.create(this.categoryForm.value).subscribe(
      (data) => {
        this.toastr.success('Successfuly created', `Category ${data.name}`, { timeOut: 5000 , closeButton: true});
        this.categoryForm.reset();
      },
      err =>{
        this.toastr.error(err['message'], 'Error occured', { timeOut: 10000 , closeButton: true});
      });
  }
}
