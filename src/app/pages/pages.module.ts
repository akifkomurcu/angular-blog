import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardComponent } from '../components/card/card.component';
import { CardModule } from 'primeng/card';
import { ArticlesComponent } from './articles/articles.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "articles",
    component: ArticlesComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ButtonModule,
    CardModule
  ],
  declarations:
  [
    HomeComponent,
    CardComponent,
    ArticlesComponent
  ]
})
export class PagesModule { }
