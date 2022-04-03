import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'transfer-fund',
  templateUrl: './transfer-fund.component.html',
  styleUrls: ['./transfer-fund.component.scss']
})
export class TransferFundComponent {

  @Input() contactName: string
  @Output() onTransfer = new EventEmitter<number>()

  amount: number
  constructor() { }
}
