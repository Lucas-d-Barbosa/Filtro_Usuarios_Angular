import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/user/user.interface';
import { UsersList } from './data/users-list';
import { IFilterOptions } from './interfaces/IFilterOptions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  
  usersList : IUser[] = [];
  usersListFiltered : IUser[] = [];
  userSelected : IUser = {} as IUser;
  showUserDetails : boolean = false;
  selectedUser(newUser : IUser)
  {
    this.userSelected = newUser;
    this.showUserDetails = true;
  }


  ngOnInit() {
    setTimeout(() => {
      this.usersList = UsersList;
      this.usersListFiltered = this.usersList;
    }, 1);
  };

  onFilter(filter : IFilterOptions){
    this.usersListFiltered = this.filterUsersList(filter, this.usersList);
  };

  filterUsersList(filterOptions: IFilterOptions, usersList : IUser[]) : IUser[]
  {
    let filteredList : IUser[]  = [];

    filteredList = this.filterUsersListByName(filterOptions.name, this.usersList);

    return filteredList;
  };

  filterUsersListByName(name : string | undefined, usersList : IUser[]) : IUser[]
  {
    const NAME_NOT_TYPED = name === undefined;
    if(NAME_NOT_TYPED){
      return usersList;
    }
    
    const filteredList = usersList.filter((user) => user.nome.toLowerCase().includes(name.toLowerCase()));
    return filteredList;
  }
 
}
