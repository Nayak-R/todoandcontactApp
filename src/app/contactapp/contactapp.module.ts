import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactappRoutingModule } from './contactapp-routing.module';
import { ViewcontactComponent } from './viewcontact/viewcontact.component';
import { CreatecontactComponent } from './createcontact/createcontact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { ContactappService } from './contactapp.service';
import { ContactappComponent } from './contactapp.component';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    ViewcontactComponent,
    CreatecontactComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ContactappRoutingModule,
    MatTableModule,
    MatDialogModule
  ],
  bootstrap: [ContactappComponent],
  providers: [ContactappService]
})
export class ContactappModule { }
