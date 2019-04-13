import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Users} from '../../models/users.model';
import {UsersService} from '../../services/users.service';
import {Route, Router} from '@angular/router';
import {PartialObserver, Subscription} from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

user: any;
  userForm: FormGroup;
  data: any;
  username: string;
  verifenregistrement: boolean = false;
  verif: any;
  verifusername: boolean = true;

  constructor(private formBuilder: FormBuilder, private userService: UsersService, private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
  this.userForm = this.formBuilder.group({
    username: ['', Validators.required],
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    prenom: ['', Validators.required],
    tel: ['', Validators.required],
    contry: ['', Validators.required]
  });
  }

onSubmit() {
const  formValue = this.userForm.value;
const newUser = new Users(
  formValue['username'],
  formValue['name'],
  formValue['prenom'],
  formValue['email'],
  formValue['tel'],
  formValue['contry']
    );
    this.userService.saveUser(newUser).subscribe(response => {
        console.log(response);
        this.data = response;
        this.verifenregistrement = true;
        }
     );
  }

  verifDis() {
    const  formValue = this.userForm.value;
    const newUser = new Users(
      formValue['username'],
      formValue['name'],
      formValue['prenom'],
      formValue['email'],
      formValue['tel'],
      formValue['contry']
    );
    return this.userService.verifUsername(newUser).subscribe(
      data => {
        this.verif = data;
        console.log(data);
        this.verifusername = this.verif;
        this.username = newUser.username;
        console.log('le contenu de verif est ' + this.verif);
      },
      error => console.log('ERROR: ' + error));
     }

  retourAcceuil() {
    this.router.navigate(['Acceuil']);
  }

}
