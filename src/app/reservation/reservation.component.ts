import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../store';
import { addReservation } from '../store/tables/tables.actions';
import { Reservation, Table } from '../store/tables/tables.reducer';
import { nonReservedTablesSelector, tableFilteredListSelector } from '../store/tables/tables.selector';

@Component({
  selector: 'reservation-form',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReservationComponent implements OnInit {
  reservationForm: FormGroup;
  tables$: Observable<Table[]>;

  currentDate: string;

  constructor(private store: Store<AppState>, private fb: FormBuilder) { }

  ngOnInit() {
    this.reservationForm = this.fb.group({
      tableId: ['', Validators.required],
      startDate: ['', Validators.required]
    });
    this.currentDate = new Date().toISOString();
    this.tables$ = this.store.select(nonReservedTablesSelector);
  }

  makeReservation() {
    if (this.reservationForm.valid) {
      const values = this.reservationForm.value;
      const reservationDate = new Date(values.startDate).getTime();

      const reservation: Reservation = {
        ...this.reservationForm.value,
        startDate: reservationDate
      };
      console.log(this.reservationForm.value);
      this.store.dispatch(addReservation({ data: reservation }));

      this.reservationForm.reset();
    }
  }

}
