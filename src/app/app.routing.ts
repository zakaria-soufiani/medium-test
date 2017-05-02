import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {DatabaseComponent} from "./database/database.component";
import {HomeComponent} from "./home/home.component";


const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'database', component: DatabaseComponent }
];



export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
