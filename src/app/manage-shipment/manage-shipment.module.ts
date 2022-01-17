import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomFormsModule } from 'ngx-custom-validators';
import { ArchwizardModule } from 'angular-archwizard';
import { UiSwitchModule } from 'ngx-ui-switch';
import { NgSelectModule } from '@ng-select/ng-select';
import { FileUploadModule } from 'ng2-file-upload';


import { ManageShipmentRoutingModule } from './manage-shipment-routing.module';
import { ShipmentHistoryComponent } from './shipment-history/shipment-history.component';
import { TrackShipmentComponent } from './track-shipment/track-shipment.component';
import { ManualComponent } from './manual/manual.component';
import { ImportCsvComponent } from './import-csv/import-csv.component';
import { ShipmentDetailComponent } from './shipment-detail/shipment-detail.component';
import { ImportCsvViewComponent } from './import-csv-view/import-csv-view.component';
import { ShipmentEditComponent } from './shipment-edit/shipment-edit.component';




@NgModule({
  declarations: [
    ShipmentHistoryComponent,
    TrackShipmentComponent,
    ManualComponent,
    ImportCsvComponent,
    ShipmentDetailComponent,
    ImportCsvViewComponent,
    ShipmentEditComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ManageShipmentRoutingModule,
    NgbModule,
    NgSelectModule,
    UiSwitchModule,
    CustomFormsModule,
    ArchwizardModule,
    FileUploadModule,
  ]
})
export class ManageShipmentModule { }
