import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatetodolistComponent } from './createtodolist/createtodolist.component';
import { ViewtodolistComponent } from './viewtodolist/viewtodolist.component';

const routes: Routes = [
  {
    path:'',
    component: ViewtodolistComponent
  },
  {
    path:'viewtodolist',
    component: ViewtodolistComponent
  },
  {
    path:'createtodolist',
    component: CreatetodolistComponent
  },
  {
    path:'createtodolist/:create/:index',
    component: CreatetodolistComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoappRoutingModule { }
