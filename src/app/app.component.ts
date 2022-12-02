import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Home';
  constructor(private titleset:Title){}
  
  ngOnInit(): void {
    this.titleset.setTitle(this.title)
  }

}
