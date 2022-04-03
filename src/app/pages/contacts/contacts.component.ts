import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ContactFilter } from 'src/app/models/contact-filter.model';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  constructor(private contactService: ContactService) { }

  contactsInPage = 10
  pageIdx =  0
  contacts$:Observable<Contact[]>
  subsciption: Subscription
  ngOnInit(): void {
    this.contactService.loadContacts()
    this.contacts$ = this.contactService.contacts$  
  }


  loadContacts(filterBy:ContactFilter) {    
    this.contactService.loadContacts(filterBy)
    this.contacts$ = this.contactService.contacts$
  }

}
