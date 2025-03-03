import { Component, EventEmitter, Output } from '@angular/core';
import { IUser } from '../../interfaces/user/user.interface';
import { UsersList } from '../../data/users-list';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


@Component({
  selector: 'app-users-list',
  standalone: false,
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent {
  displayedColumns: string[] = ["name", "date", "status"];
  usersList: IUser[] = UsersList;


  @Output() userDetails = new EventEmitter<IUser>(); 
  onUserSelected(user : IUser)
  {
    this.userDetails.emit(user);
  }
}
