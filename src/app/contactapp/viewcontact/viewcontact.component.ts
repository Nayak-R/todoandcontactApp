import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactappService } from '../contactapp.service';
import { Contact } from '../enity/Contact';

@Component({
  selector: 'app-viewcontact',
  templateUrl: './viewcontact.component.html',
  styleUrls: ['./viewcontact.component.css']
})
export class ViewcontactComponent implements OnInit {

  displayedColumns: string[] = ['sl', 'name', 'sname', 'company', 'email', 'mobileNumber', 'edit', 'delete'];
  contact: Contact[] = [];
  ind!: number
  title = 'Contact Book';

  dataSource: any


  constructor(private router: Router, private route: ActivatedRoute, private titleset: Title, private contactappService: ContactappService) {
  }

  ngOnInit(): void {
    this.titleset.setTitle(this.title)
    
    this.contactappService.getAllContacts().subscribe(data => {
      this.contact = <Contact[]>data;
      this.dataSource = new MatTableDataSource(this.contact);
    }, error => {
      this.contact=[];
      console.log("Error in view")
    })
  }

  createContact() {
    this.router.navigate(['contactapp/createcontact/true/0']);
  }

  edit(id: number) {
    this.router.navigate(['contactapp/createcontact/false/' + id]);
  }

  deletex(id: number) {
    this.ind = id
  }

  fordelete() {

    this.contactappService.deleteContact(this.ind).subscribe(data => {
    }, error => {
      console.log("Error in delete")
    })

    this.contactappService.getAllContacts().subscribe(data => {
      this.contact = <Contact[]>data;
      this.dataSource = new MatTableDataSource(this.contact);
    }, error => {
      this.contact=[];
      console.log("Error in view")
    })

  }

}
