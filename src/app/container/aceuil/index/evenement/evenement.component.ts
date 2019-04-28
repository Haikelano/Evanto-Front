import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Event} from '../../../../models/event.model';
import {EventService} from '../../../../services/event.service';
import {formatDate} from '@angular/common';


@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css']
})
export class EvenementComponent implements OnInit {

  eventForm: FormGroup;
  selectFile: File = null;
  constructor(private formBuilder: FormBuilder, private router: Router, private eventService: EventService) { }

  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.eventForm = this.formBuilder.group({
      name: ['', Validators.required],
      location: ['', Validators.required],
      vote: ['', Validators.required],
      datedepart: ['', Validators.required],
      datearet: ['', Validators.required],
      type: ['', Validators.required],
      descreption: ['', Validators.required],
      nombreplace: ['', Validators.required],
      prixticket: ['', Validators.required]
    });
  }
  onFileSelector(event) {
    console.log(event);
    this.selectFile = <File>event.target.files[0];
    console.log('select file ' + this.selectFile.name);
  }
  onSubmit() {
    const  formValue = this.eventForm.value;
    const newevent = new Event(
      formValue['name'],
      formValue['location'],
      formValue['vote'],
      formValue['datedepart'],
      formValue['datearet'],
      formValue['type'],
      formValue['descreption'],
      formValue['nombreplace'],
      formValue['prixticket']
     );

    const fd = new FormData();
    fd.append('image', this.selectFile, this.selectFile.name);
    fd.append('event', JSON.stringify(newevent));

    this.eventService.saveEvent(fd).subscribe(response => {
        console.log(response);
         }
    );
  }


}
