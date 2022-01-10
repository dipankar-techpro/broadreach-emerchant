import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emerchant-user-edit',
  templateUrl: './emerchant-user-edit.component.html',
  styleUrls: ['./emerchant-user-edit.component.scss']
})
export class EmerchantUserEditComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  cities = [
    { id: 1, name: 'Vilnius' },
    { id: 2, name: 'Kaunas' },
    { id: 3, name: 'Pavilnys', disabled: true },
    { id: 4, name: 'Pabradė' },
    { id: 5, name: 'Klaipėda' }
  ];
  selectedCity: any;
}
