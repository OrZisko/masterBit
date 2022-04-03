import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { ContactFilter } from 'src/app/models/contact-filter.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Output() onSetFilter = new EventEmitter<ContactFilter>()

  filterBy: ContactFilter
  subscription: Subscription
  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.filterBy = {term: ''}
  }
}
