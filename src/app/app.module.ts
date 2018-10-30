import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SplashComponent } from './splash/splash.component';
import { SandboxComponent } from './sandbox/sandbox.component';
import { HoleComponent } from './sandbox/hole.component'
import { routing } from "./app.routing";

@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
    SandboxComponent,
    HoleComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
