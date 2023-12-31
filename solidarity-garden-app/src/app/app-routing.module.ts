import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NewsComponent } from './pages/news/news.component';

export const routes: Routes = [
  {path:'', pathMatch:'full',component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'news',component:NewsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
