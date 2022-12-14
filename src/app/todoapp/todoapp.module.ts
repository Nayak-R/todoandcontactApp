import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoappRoutingModule } from './todoapp-routing.module';
import { ViewtodolistComponent } from './viewtodolist/viewtodolist.component';
import { CreatetodolistComponent } from './createtodolist/createtodolist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { TodoappComponent } from './todoapp.component';
import { TodoappServer } from './todoapp.service';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    ViewtodolistComponent,
    CreatetodolistComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TodoappRoutingModule,
    MatTableModule,
    MatDatepickerModule,
    MatInputModule
  ],
  bootstrap: [TodoappComponent],
  providers: [TodoappServer]
})
export class TodoappModule { }
