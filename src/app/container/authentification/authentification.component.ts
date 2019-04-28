import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  getUrl() {
    return "url('https://tourismelacbrome.com/wp-content/uploads/sites/3/2016/08/brome-evenement-background-banner.jpg')";
  }
}
