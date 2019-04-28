import { Component, OnInit } from '@angular/core';
import {EventService} from '../../../services/event.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {


  listEvent: any;
  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.getEvenement();
  }

    getEvenement() {
    this.eventService.getListEvent().subscribe(
      value => {
        this.listEvent = value;
      }
    );
  }
}
