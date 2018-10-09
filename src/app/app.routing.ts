import { NgModule } from "@angular/core"
import { Routes, RouterModule } from "@angular/router";

import { SplashComponent } from './splash/splash.component';

const APP_ROUTES: Routes = [
  {path: '', component: SplashComponent, pathMatch: 'full'}
]

export const routing = RouterModule.forRoot(APP_ROUTES);
