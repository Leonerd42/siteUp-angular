import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { ConstComponent } from './component/const/const.component';
import { AboutComponent } from './component/about/about.component';

const routes: Routes = [
  {
    path: '', 
    component: HomePageComponent
  },
  {
      path: 'home', 
      component: HomePageComponent
  }, 
  {
      path: 'const/:id', 
      component: ConstComponent
  }, 
  {
      path: 'about', 
      component: AboutComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ConstComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
