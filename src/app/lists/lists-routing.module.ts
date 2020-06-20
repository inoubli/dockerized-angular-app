import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListsComponent } from './lists.component';
import { ListMealsComponent } from './list-meals/list-meals.component';
import { ListCategoriesComponent } from './list-categories/list-categories.component';
import { ListFoodsComponent } from './list-foods/list-foods.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import { FoodDetailsComponent } from './food-details/food-details.component';
import { FoodEditComponent } from './food-edit/food-edit.component';
import { MealDetailsComponent } from './meal-details/meal-details.component';
import { MealEditComponent } from './meal-edit/meal-edit.component';


const routes: Routes = [
  {
    path: '',
    component: ListsComponent,
    children: [
      {
        path: '',
        redirectTo: 'meals',
        pathMatch: 'full',
      },
      {
        path: 'meals',
        component: ListMealsComponent,
      },
      {
        path: 'categories',
        component: ListCategoriesComponent,
      },
      {
        path: 'foods',
        component: ListFoodsComponent,
      },
      {
        path: 'category/view/:id',
        component: CategoryDetailsComponent,
      },
      {
        path: 'category/edit/:id',
        component: CategoryEditComponent,
      },
      {
        path: 'food/view/:id',
        component: FoodDetailsComponent,
      },
      {
        path: 'food/edit/:id',
        component: FoodEditComponent,
      },
      {
        path: 'meal/view/:id',
        component: MealDetailsComponent,
      },
      {
        path: 'meal/edit/:id',
        component: MealEditComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListsRoutingModule { }
