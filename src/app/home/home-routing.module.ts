import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoodComponent } from './food/food.component';
import { CategoryComponent } from './category/category.component';
import { MealComponent } from './meal/meal.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'food',
        pathMatch: 'full',
      },
      {
        path: 'food',
        component: FoodComponent,
      },
      {
        path: 'category',
        component: CategoryComponent,
      },
      {
        path: 'meal',
        component: MealComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
