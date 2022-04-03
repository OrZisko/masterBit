import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { BitcoinService } from 'src/app/services/bitcoin.service.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'mastrbit-app',
  templateUrl: './mastrbit-app.component.html',
  styleUrls: ['./mastrbit-app.component.scss']
})
export class MastrbitAppComponent implements OnInit {

  constructor(
    private bitconService: BitcoinService, 
    private userService: UserService,
    private router: Router) { }
  user:User
  coinsInBit:number
  sub: Subscription

  ngOnInit(): void {    
    this.sub = this.userService.user$.subscribe(user => {
      if (!user.name) this.router.navigateByUrl('/signup')
      this.user = user
    })
    this.bitconService.getRate(this.user.coins).subscribe(
      ans => {
        this.coinsInBit = ans
      }
    )
  }
  get3Moves() {
    return this.user.moves.slice(0,3)
  }
}
