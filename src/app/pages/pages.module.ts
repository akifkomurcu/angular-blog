import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { ButtonModule } from 'primeng/button';
const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ButtonModule
  ],
  declarations: [HomeComponent]
})
export class PagesModule { }
