import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { BitcoinService } from 'src/app/services/bitcoin.service.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit, OnDestroy {
  marketPriceOptions: any;
  avgBlockSizeOptions: any;
  marketSub: Subscription
  avgSub: Subscription
  user$: User
  userSub: Subscription
  coinsInBit: number
  coinsInBitSub: Subscription
  constructor(private bitcoinService: BitcoinService, private userService: UserService) {}

  ngOnInit(): void {
    this.userSub = this.userService.user$.subscribe(user => this.user$ = user)
    this.bitcoinService.getRate(this.user$.coins).subscribe(bits => this.coinsInBit = bits)
    this.marketSub = this.bitcoinService.getChartOption('market-price').subscribe(
      res => {
        this.marketPriceOptions = res
      }
    )
    this.avgSub = this.bitcoinService.getChartOption('avg-block-size').subscribe(
      res => {
        this.avgBlockSizeOptions = res
      }
    )
  }

  
  ngOnDestroy(): void {
      this.marketSub.unsubscribe()
      this.avgSub.unsubscribe()
      this.userSub.unsubscribe()
  }
}
