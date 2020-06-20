import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListsRoutingModule } from './lists-routing.module';
import { ListsComponent } from './lists.component';
import { ListCategoriesComponent } from './list-categories/list-categories.component';
import { ListMealsComponent } from './list-meals/list-meals.component';
import { ListFoodsComponent } from './list-foods/list-foods.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';

import { CategoryEditComponent } from './category-edit/category-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { FoodDetailsComponent } from './food-details/food-details.component';
import { FoodEditComponent } from './food-edit/food-edit.component';
import { MealDetailsComponent } from './meal-details/meal-details.component';
import { MealEditComponent } from './meal-edit/meal-edit.component';



@NgModule({
  declarations: [
    ListsComponent, 
    ListCategoriesComponent, 
    ListMealsComponent, 
    ListFoodsComponent, 
    CategoryDetailsComponent, CategoryEditComponent, FoodDetailsComponent, FoodEditComponent, MealDetailsComponent, MealEditComponent,
  ],
  imports: [
    CommonModule,
    ListsRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    NgxPaginationModule,
  ]
})
export class ListsModule { }
