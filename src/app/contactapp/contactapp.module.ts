import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactappRoutingModule } from './contactapp-routing.module';
import { ViewcontactComponent } from './viewcontact/viewcontact.component';
import { CreatecontactComponent } from './createcontact/createcontact.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ViewcontactComponent,
    CreatecontactComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ContactappRoutingModule
  ]
})
export class ContactappModule { }
