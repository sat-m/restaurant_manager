import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store';
import { Table } from '../store/tables/tables.reducer';
import { clearReservation } from '../store/tables/tables.actions';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'table-item',
  templateUrl: './table-item.component.html',
  styleUrls: ['./table-item.component.scss'],
})
export class TableItemComponent implements OnInit {
  @Input() table: Table;

  constructor(private store: Store<AppState>, public alert: AlertController) { }

  ngOnInit() { }

  async showReservationRemovalConfirm() {
    const alert = await this.alert.create({
      cssClass: 'my-custom-class',
      message: `Remove the reservation for ${this.table.location}  table?`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Canceled');
          }
        }, {
          text: 'Yes',
          handler: () => {
            this.store.dispatch(clearReservation({ tableId: this.table.id }))
          }
        }
      ]
    });

    await alert.present();
  }

  removeReservation() {
    this.showReservationRemovalConfirm();
  }

}
