import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss'],
})
export class ReservationComponent implements OnInit {
  reservationForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.reservationForm = new FormGroup({
      tableId: new FormControl(''),
      startDate: new FormControl(''),
    });


  }

  makeReservation(){
    debugger
  }

}
