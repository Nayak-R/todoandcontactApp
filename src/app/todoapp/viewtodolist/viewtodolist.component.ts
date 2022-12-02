import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Tasklist } from '../entity/Tasklist';
import { TodoappServer } from '../todoapp.service';

@Component({
  selector: 'app-viewtodolist',
  templateUrl: './viewtodolist.component.html',
  styleUrls: ['./viewtodolist.component.css']
})


export class ViewtodolistComponent implements OnInit {

  title='View Task List'
  displayedColumns: string[] = ['sl', 'task', 'date', 'time', 'edit', 'delete']
  tasklist !: Tasklist[];
  ind!: number

  dataSource : any

  constructor(private router: Router, private route: ActivatedRoute, private titleset:Title, private todoappServer: TodoappServer) {  }

  ngOnInit(): void {
    this.titleset.setTitle(this.title)

    this.todoappServer.getAllTask().subscribe(data => {
      this.tasklist=<Tasklist[]>data;
      this.dataSource = new MatTableDataSource(this.tasklist);
    }, error => {
      this.tasklist=[];
      console.log("Error in view")
    })
  }

  create() {
    this.router.navigate(['todoapp/createtodolist/true/0']);
  }

  fordelete() {
    console.log(this.ind)

    this.todoappServer.deleteTask(this.ind).subscribe(data => {
      this.tasklist = <Tasklist[]>data;
    }, error => {
      console.log("Error in delete")
    })

    this.todoappServer.getAllTask().subscribe(data => {
      this.tasklist=<Tasklist[]>data;
      this.dataSource = new MatTableDataSource(this.tasklist);
    }, error => {
      this.tasklist=[];
      console.log("Error in view")
    })

  }

  edit(id: number) {
    this.router.navigate(['todoapp/createtodolist/false/' + id]);
  }
  deletex(id: number) {
    this.ind = id
  }
}
