import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessComponent } from './business/business.component';
import { TechComponent } from './tech/tech.component';
import { TopheadineComponent } from './topheadine/topheadine.component';

const routes: Routes = [
  { path: '', component: TopheadineComponent }, //top headlines and home
  { path: 'tech', component: TechComponent},
  { path: 'buzz', component: BusinessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
