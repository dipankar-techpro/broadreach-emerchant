import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CsvDetailViewComponent } from './csv-detail-view/csv-detail-view.component';
import { CsvEditComponent } from './csv-edit/csv-edit.component';
import { ImportCsvComponent } from './import-csv/import-csv.component';
import { ManualComponent } from './manual/manual.component';
import { ShipmentDetailComponent } from './shipment-detail/shipment-detail.component';
import { ShipmentEditComponent } from './shipment-edit/shipment-edit.component';
import { ShipmentHistoryComponent } from './shipment-history/shipment-history.component';
import { TrackShipmentComponent } from './track-shipment/track-shipment.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'manual',
        component: ManualComponent,
        data: {
          title: 'Shipment Creation'
        }
      },
      {
        path: 'shipment-detail',
        component: ShipmentDetailComponent,
        data: {
          title: 'Shipment Detail'
        }
      },
      {
        path: 'import-csv',
        component: ImportCsvComponent,
        data: {
          title: 'Import CSV'
        }
      },
      {
        path: 'edit-shipment',
        component: ShipmentEditComponent,
        data: {
          title: 'Edit Shipment'
        }
      },
      {
        path: 'csv-edit',
        component: CsvEditComponent,
        data: {
          title: 'Edit Shipment by CSV'
        }
      },
      {
        path: 'csv-detail-view',
        component: CsvDetailViewComponent,
        data: {
          title: 'Shipment Detail'
        }
      },
      {
        path: 'track-shipment',
        component: TrackShipmentComponent,
        data: {
          title: 'Shipment Tracking'
        }
      },
      {
        path: 'shipment-history',
        component: ShipmentHistoryComponent,
        data: {
          title: 'Shipment History'
        }
      },
    ]
  }
  
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageShipmentRoutingModule { }
