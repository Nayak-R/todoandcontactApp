import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../enity/Contact';

@Component({
  selector: 'app-viewcontact',
  templateUrl: './viewcontact.component.html',
  styleUrls: ['./viewcontact.component.css']
})
export class ViewcontactComponent implements OnInit {

  contact!: Contact[];
  ind!: number
  title = 'Contact Book';
  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.contact = JSON.parse(window.localStorage.getItem("contactlist") as any);

  }

  createContact() {
    this.router.navigate(['contactapp/createcontact/true/0']);
  }
  edit(index: number) {
    this.router.navigate(['contactapp/createcontact/false/' + index]);
  }
  deletex(index: number) {
    this.ind = index
  }
  fordelete() {

    this.contact.splice(this.ind, 1);

    localStorage.setItem("contactlist", JSON.stringify(this.contact));

  }

}
