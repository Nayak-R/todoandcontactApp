import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactappService } from '../contactapp.service';
import { Contact } from '../enity/Contact';

@Component({
  selector: 'app-createcontact',
  templateUrl: './createcontact.component.html',
  styleUrls: ['./createcontact.component.css']
})
export class CreatecontactComponent implements OnInit {
  title = 'Create Contact';
  create = true;
  editedId!: string;
  contact!: Contact;

  get email() {
    return this.createform.get('email')
  }
  get mobileNumber() {
    return this.createform.get('mobileNumber')
  }
  get name() {
    return this.createform.get('name')
  }
  get sname() {
    return this.createform.get('sname')
  }
  get company() {
    return this.createform.get('company')
  }
  createform = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    name: new FormControl('', [Validators.required]),
    sname: new FormControl('', [Validators.required,]),
    company: new FormControl('', [Validators.required,]),

    mobileNumber: new FormControl('', [Validators.required,
    Validators.pattern("^[0-9]*$"),
    Validators.minLength(10),
    Validators.maxLength(10)])

  });

  constructor(private router: Router, private route: ActivatedRoute, private titleset: Title, private contactappService: ContactappService) { }

  ngOnInit(): void {
    this.titleset.setTitle(this.title)

    let createParam = this.route.snapshot.params['create'];
    this.editedId = this.route.snapshot.params['index'];

    if (createParam === 'true') {
      this.create = true;
      this.contact=new Contact();
    } else {
      this.contactappService.getContactById(this.editedId).subscribe(data => {
        this.contact = <Contact>data;
      }, error => {
        console.log("error in loading")
      })
      this.create = false;
    }


  }

  save() {

    this.contactappService.addContact(this.contact).subscribe(data => {
      this.router.navigate(['contactapp/viewcontact']);
    }, Error => {
      window.alert("Error occured while adding the contact details.")
    })

  }

  close() {
    this.router.navigate(['contactapp/viewcontact']);
  }

  update() {

    this.contactappService.updateContact(this.contact, this.editedId).subscribe(data => {
      this.router.navigate(['contactapp/viewcontact']);
    }, Error => {
      window.alert("Error occured while updating the contact details.")
    })

  }

  reset() {
    this.contact.name = ''
    this.contact.sname = ''
    this.contact.company = ''
    this.contact.email = ''
    this.contact.mobileNumber = ''
  }

}
