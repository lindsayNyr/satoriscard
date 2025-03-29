import { Component, OnInit } from '@angular/core';
import { User } from '../shared/types/user.type';
import { UserService } from '../shared/services/user.service';
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-user',
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent implements OnInit {
  private _user: User;

  constructor(private _userService: UserService) {
    this._user = {} as User;
  }

  //Return private property _user
  get user(): User {
    return this._user;
  }

  //OnInit implementation
  ngOnInit(): void {
    this._userService.fetchUser().subscribe({
      next: (user: User) => (this._user = user),
      error: () => {
        this._user = this._userService.defaultUser;
      },
    });
  }
}
