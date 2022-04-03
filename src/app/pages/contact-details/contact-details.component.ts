import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { User } from 'src/app/models/user.model';
import { ContactService } from 'src/app/services/contact.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit, OnDestroy {
  contactSub: Subscription
  userSub: Subscription
  contact: Contact
  user: User

  constructor(
    private userService: UserService ,
    private route: ActivatedRoute, 
    private router: Router) { }

  ngOnInit(): void {
    this.contactSub = this.route.data.subscribe(data => {
      this.contact = data['contact']
    })
    this.userSub = this.userService.user$.subscribe(user => {
      this.user = user
    })
  }
  transfer(ev:number) {
    const move = {
      toId: this.contact._id,
      to: this.contact.name,
      at: Date.now(),
      amount: ev
    }
    this.userService.addMove(move)
    this.router.navigateByUrl('')
  }

  getContactFromUserMoves() {
    return this.user.moves.filter(move => move.toId === this.contact._id)
  }

  ngOnDestroy(): void {
      this.contactSub.unsubscribe()
  }

}
