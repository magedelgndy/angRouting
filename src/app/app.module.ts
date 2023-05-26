import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProudctsComponent } from './proudcts/proudcts.component';
import { MyProudctComponent } from './my-proudct/my-proudct.component';
import { FooterComponent } from './footer/footer.component';
import { ProudctDetailsComponent } from './proudct-details/proudct-details.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { LoginComponent } from './login/login.component';
import { MySliderComponent } from './my-slider/my-slider.component';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProudctsComponent,
    MyProudctComponent,
    FooterComponent,
    ProudctDetailsComponent,
    NotFoundPageComponent,
    LoginComponent,
    MySliderComponent,
    HomePageComponent,
  ],
  imports: [FormsModule, BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
