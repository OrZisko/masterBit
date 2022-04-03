import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Move } from '../models/move.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  private _user$ = new BehaviorSubject<User>(this._getUser())

  user$ = this._user$.asObservable()

  signUp(user: User) {
    localStorage.setItem('masterBitUser', JSON.stringify(user))
    this._user$.next(user)
  }

  addMove(move: Move) {
    var user = this._getUser()
    user.coins -= move.amount
    user.moves.push(move)
    this.signUp(user)
  }

  _getUser() {
    var user = JSON.parse(localStorage.getItem('masterBitUser'))
    return user ? user : {} as User
  }
}
