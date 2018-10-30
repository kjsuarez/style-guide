import { NgModule } from "@angular/core"
import { Routes, RouterModule } from "@angular/router";

import { SplashComponent } from './splash/splash.component';
import { SandboxComponent } from './sandbox/sandbox.component';
import { HoleComponent } from './sandbox/hole.component';

const APP_ROUTES: Routes = [
  {path: '', component: SplashComponent, pathMatch: 'full'},
  {path: 'sandbox', component: SandboxComponent},
  {path: 'hole', component: HoleComponent}
]

export const routing = RouterModule.forRoot(APP_ROUTES);
