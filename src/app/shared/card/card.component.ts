import { Component, Input, OnInit } from '@angular/core';
import { User } from '../types/user.type';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent implements OnInit {
  //Private property to store the user value
  private _user: User;

  /**
   * Component constructor
   */
  constructor() {
    this._user = {} as User;
  }

  /**
   * Return private property _user
   */
  get user(): User {
    return this._user;
  }

  /**
   * Sets private property _user
   */
  @Input()
  set user(user: User) {
    this._user = user;
  }

  /**
   * OnInit implementation
   */
  ngOnInit(): void {}
}
