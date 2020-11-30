import { Component, Input, OnInit } from '@angular/core';
import { Table } from '../store/tables.reducer';

@Component({
  selector: 'table-item',
  templateUrl: './table-item.component.html',
  styleUrls: ['./table-item.component.scss'],
})
export class TableItemComponent implements OnInit {
  @Input() table: Table;

  constructor() { }

  ngOnInit() {}

}
