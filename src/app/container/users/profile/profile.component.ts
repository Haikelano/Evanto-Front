import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../../services/users.service';
import {ActivatedRoute} from '@angular/router';
import {Users} from '../../../models/users.model';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  name: string;
  user: any;
  dd: string = '5cb2648922b19416427d20a5';
  constructor(private usersService: UsersService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.usersService.getUserById(this.dd).subscribe(
      reponse => {
          this.user = reponse;
           }
    );
      }
}