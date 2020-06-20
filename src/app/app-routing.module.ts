import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/auth/auth.guard';

const routes: Routes = [
  {
    path:'' , 
    redirectTo:'/security', 
    pathMatch:'full' },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'lists',
    loadChildren: () => import('./lists/lists.module').then((l) => l.ListsModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'security',
    loadChildren: () => import('./security/security.module').then((s) => s.SecurityModule),
  },
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}


