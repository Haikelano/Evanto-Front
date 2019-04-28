import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../../services/users.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Users} from '../../../models/users.model';
import {UpdateUser} from '../../../models/updateUser.model';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  name: string;
  submitted: boolean = false;
  user: any;
  id: string;
  users: UpdateUser = new UpdateUser();
  dd: string = '5cb2648922b19416427d20a5';
  constructor(private usersService: UsersService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.usersService.getUserById(this.dd).subscribe(
      reponse => {
          this.user = reponse;
          console.log('le id de notre user est ' + this.user.id);
          this.users = this.user;
          this.id = this.user.id;
           }
    );
      }

  nav() {
   this.router.navigate(['Dashbord']);
  }
  onUpdate() {
   this.usersService.updateUser(this.id, this.users).
     subscribe(
       data => {
         console.log(data);
         console.log('Succes for update');
         this.users = data as UpdateUser;
         this.submitted = true;
       },
       error => console.log(error));
  }

}
