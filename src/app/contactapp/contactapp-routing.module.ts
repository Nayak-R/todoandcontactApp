import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatecontactComponent } from './createcontact/createcontact.component';
import { ViewcontactComponent } from './viewcontact/viewcontact.component';

const routes: Routes = [
  {
    path: '',
    component: ViewcontactComponent
  },
  {
    path: 'viewcontact',
    component: ViewcontactComponent
  },
  {
    path: 'createcontact',
    component: CreatecontactComponent
  },
  {
    path: 'createcontact/:create/:index',
    component: CreatecontactComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactappRoutingModule { }
