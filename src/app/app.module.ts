import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { ConstComponent } from './component/const/const.component';

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
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomePageComponent,
    ConstComponent
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
