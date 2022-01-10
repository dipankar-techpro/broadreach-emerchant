import { Component, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";
import { DatatableComponent, ColumnMode } from "@swimlane/ngx-datatable";
import { usersListData } from "./data/users-list.data";

@Component({
  selector: 'app-user-roles-list',
  templateUrl: './user-roles-list.component.html',
  styleUrls: [
    './user-roles-list.component.scss',
    "../../../assets/sass/libs/datatables.scss"
  ],
  encapsulation: ViewEncapsulation.None,
})
export class UserRolesListComponent implements OnInit {

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

  ngOnInit(): void {}

}
