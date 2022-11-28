import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../enity/Contact';

@Component({
  selector: 'app-createcontact',
  templateUrl: './createcontact.component.html',
  styleUrls: ['./createcontact.component.css']
})
export class CreatecontactComponent implements OnInit {
  title = 'Create Contact';
  create = true;
  editedIndex!: string;
  contact!: Contact;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let createParam = this.route.snapshot.params['create'];
    this.editedIndex = this.route.snapshot.params['index'];

    if (createParam === 'true') {
      this.create = true;
      this.contact = new Contact();
    } else {
      let contacts = JSON.parse(localStorage.getItem("contactlist") as any);
      this.contact = JSON.parse(JSON.stringify(contacts[this.editedIndex]));
      this.create = false;
    }
  }

  save() {

    let contactlist = JSON.parse(window.localStorage.getItem("contactlist") as string);

    if (contactlist === null) {
      contactlist = [];
    }
    contactlist.push(this.contact);

    localStorage.setItem("contactlist", JSON.stringify(contactlist));

    this.router.navigate(['contactapp/viewcontact']);
  }



  close() {
    this.router.navigate(['contactapp/viewcontact']);
  }

  update() {
    let contactlist = JSON.parse(window.localStorage.getItem("contactlist") as string);

    if (contactlist === null) {
      contactlist = [];
    }

    contactlist[this.editedIndex].name = this.contact.name;
    contactlist[this.editedIndex].sname = this.contact.sname;
    contactlist[this.editedIndex].company = this.contact.company;
    contactlist[this.editedIndex].email = this.contact.email;
    contactlist[this.editedIndex].mobileNumber = this.contact.mobileNumber;

    localStorage.setItem("contactlist", JSON.stringify(contactlist));

    this.router.navigate(['contactapp/viewcontact']);
  }

  reset() {
    this.contact.name = ''
    this.contact.sname = ''
    this.contact.company = ''
    this.contact.email = ''
    this.contact.mobileNumber = ''
  }

}
