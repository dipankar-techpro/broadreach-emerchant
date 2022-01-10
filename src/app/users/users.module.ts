import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";


import { ChartistModule } from 'ng-chartist';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularResizedEventModule } from 'angular-resize-event';
import { MatchHeightModule } from "../shared/directives/match-height.directive";

import { UsersEditComponent } from './users-edit/users-edit.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersViewComponent } from './users-view/users-view.component';
import { UsersAddComponent } from './users-add/users-add.component';

import { UsersRoutingModule } from './users-routing.module';

import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { UserRolesListComponent } from './user-roles-list/user-roles-list.component';
import { UserRolesEditComponent } from './user-roles-edit/user-roles-edit.component';
import { UserRolesAddComponent } from './user-roles-add/user-roles-add.component';
import { UserRolesViewComponent } from './user-roles-view/user-roles-view.component';



@NgModule({
    imports: [
        CommonModule,
        UsersRoutingModule,
        ChartistModule,
        NgbModule,
        MatchHeightModule,
        NgApexchartsModule,
        AngularResizedEventModule,
        NgxDatatableModule
    ],
    exports: [],
    declarations: [
        UsersEditComponent,
        UsersListComponent,
        UsersViewComponent,
        UsersAddComponent,
        UserRolesListComponent,
        UserRolesEditComponent,
        UserRolesAddComponent,
        UserRolesViewComponent
    ],
    providers: [],
})
export class UsersModule { }
