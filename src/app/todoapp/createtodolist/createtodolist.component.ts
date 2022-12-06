import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Tasklist } from '../entity/Tasklist';
import { TodoappServer } from '../todoapp.service';


@Component({
  selector: 'app-createtodolist',
  templateUrl: './createtodolist.component.html',
  styleUrls: ['./createtodolist.component.css']
})

export class CreatetodolistComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private titleset:Title, private todoappService: TodoappServer) { }

  tasklist!: Tasklist;
  title = 'Create Task';
  create = true;
  editedIndex!: string;


  ngOnInit(): void {
    this.titleset.setTitle(this.title)
    
    let createParam = this.route.snapshot.params['create'];
    this.editedIndex = this.route.snapshot.params['index'];

    if (createParam === 'true') {
      this.create = true;
      this.tasklist = new Tasklist();
    } else {
      this.todoappService.getTaskById(this.editedIndex).subscribe(data =>{
        this.tasklist=<Tasklist>data;
      }, error =>{
        console.log("error in loading")
      })
      this.create = false;
    }
  }
  close() {
    this.router.navigate(['todoapp']);
  }

  save() {

    this.todoappService.addTask(this.tasklist).subscribe(data =>{
      this.router.navigate(['todoapp/viewtodolist'])
    }, error =>{
      window.alert("Error while adding new task.")
    })

  }
  update() {
    this.todoappService.updateTask(this.tasklist, this.editedIndex).subscribe(data => {
      this.router.navigate(['todoapp/viewtodolist']);
    }, Error => {
      window.alert("Error occured while updating the contact details.")
    })
  }

  reset(){
    this.tasklist.task=''
    this.tasklist.date=''
    this.tasklist.time=''
  }

}


