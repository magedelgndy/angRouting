import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProudctsComponent } from './proudcts/proudcts.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProudctDetailsComponent } from './proudct-details/proudct-details.component';
import { LoginComponent } from './login/login.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'products', component: ProudctsComponent },
  { path: 'products/:id', component: ProudctDetailsComponent },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
