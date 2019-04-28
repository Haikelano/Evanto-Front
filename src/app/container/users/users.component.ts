import { Component, OnInit } from '@angular/core';
import {Users} from '../../models/users.model';
import {UpdateUser} from '../../models/updateUser.model';
import {UsersService} from '../../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user: any;

  constructor(private  userService: UsersService) { }

  ngOnInit() {
    this.getList();
  }

  getList() {
    this.userService.getListUser().subscribe(
      (reponse) => {
        this.user = reponse;
        }
    );
  }
}
