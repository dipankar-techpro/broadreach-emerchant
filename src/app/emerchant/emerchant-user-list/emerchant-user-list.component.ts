import { Component, OnInit, ViewChild } from '@angular/core';
import { ColumnMode, DatatableComponent } from "@swimlane/ngx-datatable";
import { usersListData } from "./data/user-list.data";

@Component({
  selector: 'app-emerchant-user-list',
  templateUrl: './emerchant-user-list.component.html',
  styleUrls: ['./emerchant-user-list.component.scss']
})
export class EmerchantUserListComponent implements OnInit {
  verify = [
    { id: 1, name: 'any' },
    { id: 2, name: 'yes' },
    { id: 3, name: 'no' }
  ];
  role = [
    { id: 1, name: 'any' },
    { id: 2, name: 'user' },
    { id: 3, name: 'staff' }
  ];
  status = [
    { id: 1, name: 'any' },
    { id: 2, name: 'active' },
    { id: 3, name: 'close' },
    { id: 4, name: 'banned' }
  ];
  @ViewChild(DatatableComponent) table: DatatableComponent;
 // row data
 public rows = usersListData;
 public ColumnMode = ColumnMode;
 public limitRef = 10;

 // column header
 public columns = [
   { name: "Rolename", prop: "Rolename" },
   { name: "Roledescription", prop: "Roledescription" },
   { name: "Actions", prop: "Actions" }
 ];

 // private
 private tempData = [];
  constructor() {
    this.tempData = usersListData;
   }
// Public Methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * filterUpdate
   *
   * @param event
   */
   filterUpdate(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.tempData.filter(function (d) {
      return d.Username.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  /**
   * updateLimit
   *
   * @param limit
   */
  updateLimit(limit) {
    this.limitRef = limit.target.value;
  }
  selectedCity: any;

  ngOnInit(): void {
  }

}
