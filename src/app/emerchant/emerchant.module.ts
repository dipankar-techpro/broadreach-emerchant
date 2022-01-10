import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EmerchantRoutingModule } from './emerchant-routing.module';
import { CreateEmerchantComponent } from './create-emerchant/create-emerchant.component';
import { CreateEmerchantUserComponent } from './create-emerchant-user/create-emerchant-user.component';
import { EmerchantUserDetailComponent } from './emerchant-user-detail/emerchant-user-detail.component';
import { EmerchantUserEditComponent } from './emerchant-user-edit/emerchant-user-edit.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { EmerchantListComponent } from './emerchant-list/emerchant-list.component';
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { FormsRoutingModule } from 'app/forms/forms-routing.module';
import { EmerchantDetailComponent } from './emerchant-detail/emerchant-detail.component';
import { EmerchantUserListComponent } from './emerchant-user-list/emerchant-user-list.component';

@NgModule({
  declarations: [
    CreateEmerchantComponent,
    CreateEmerchantUserComponent,
    EmerchantUserDetailComponent,
    EmerchantUserEditComponent,
    EmerchantListComponent,
    EmerchantDetailComponent,
    EmerchantUserListComponent,
  ],
  imports: [
    CommonModule,
    EmerchantRoutingModule,
    NgbModule,
    FormsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgSelectModule,
    NgxDatatableModule
  ]
})
export class EmerchantModule { }
