import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'todoapp',
    loadChildren: () => import('./todoapp/todoapp.module').then(mod => mod.TodoappModule)
  },
  {
    path: 'contactapp',
    loadChildren: () => import('./contactapp/contactapp.module').then(mod => mod.ContactappModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
