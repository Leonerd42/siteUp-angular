import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { ConstComponent } from './component/const/const.component';
import { AboutComponent } from './component/about/about.component';
import { ServicesComponent } from './component/services/services.component';
import { ClientAreaComponent } from './component/client-area/client-area.component';
import { OurClientsComponent } from './component/our-clients/our-clients.component';
import { ContactComponent } from './component/contact/contact.component';

const routes: Routes = [
  {
    path: '', 
    component: AboutComponent
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
  },
  {
      path: 'services', 
      component: ServicesComponent
  },
  {
    path: 'client-area', 
    component: ClientAreaComponent
  }, 
  {
    path: 'our-clients', 
    component: OurClientsComponent
  },
  {
    path: 'contact', 
    component: ContactComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ConstComponent,
    AboutComponent,
    ServicesComponent,
    ClientAreaComponent,
    OurClientsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    RouterModule.forRoot(routes), 
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
