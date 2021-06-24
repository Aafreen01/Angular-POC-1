import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: User[];
  checkCondition: boolean = true;
  constructor() {}

  ngOnInit(): void {
    this.users = this.getUsers();
  }

  getUsers(): User[] {
    return [
      { name: 'Aafreen', age: 23 },
      { name: 'Sameer', age: 22 },
      { name: 'Rinal', age: 28 },
      { name: 'Maitri', age: 24 },
      { name: 'Deepesh', age: 36 },
    ];
  }
}
