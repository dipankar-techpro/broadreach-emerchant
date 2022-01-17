import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImportCsvViewComponent } from './import-csv-view/import-csv-view.component';
import { ImportCsvComponent } from './import-csv/import-csv.component';
import { ManualComponent } from './manual/manual.component';
import { ShipmentDetailComponent } from './shipment-detail/shipment-detail.component';
import { ShipmentEditComponent } from './shipment-edit/shipment-edit.component';

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
        path: 'import-csv-view',
        component: ImportCsvViewComponent,
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
    ]
  }
  
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageShipmentRoutingModule { }
