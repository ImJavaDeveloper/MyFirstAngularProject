import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { Component } from '@angular/core';
import { NewsComponent } from './news/news.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'news',
    component: NewsComponent,
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];
