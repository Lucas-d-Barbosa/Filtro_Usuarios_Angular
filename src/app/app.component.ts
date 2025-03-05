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
    }, 1);
  };

  onFilter(filter : IFilterOptions){
    const startDate = filter.startDate;
    const endDate = filter.endDate;
    const status = filter.status;
    const name = filter.name;
    const newUserList: IUser[] = [];
    for(let user of this.usersList)
    {
      const USER_VALID = user.ativo == status || user.nome == name;
      if(USER_VALID)
      {
        newUserList.push(user);
      }
    }
    this.usersList = newUserList;
  }
 
}
