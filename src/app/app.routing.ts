import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailPageComponent } from './detail-page/detail-page.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'detail',
    component: DetailPageComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
