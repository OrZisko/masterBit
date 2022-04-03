import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { of } from 'rxjs';
import { Contact } from '../models/contact.model';
import { ContactService } from './contact.service';

@Injectable({
  providedIn: 'root'
})
export class ContactResolver  {

  constructor(private contactServise: ContactService) { }

  async resolve(route: ActivatedRouteSnapshot) {
    const {id} = route.params
    const contact = await this.contactServise.getContactById(id)
    return contact
  }
}
