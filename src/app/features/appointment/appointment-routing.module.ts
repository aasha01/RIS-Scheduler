import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentHomeComponent } from './components/appointment-home/appointment-home.component';
import { SlotSelectionComponent } from './components/slot-selection/slot-selection.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { AppointmentFormComponent } from './components/appointment-form/appointment-form.component';


const routes: Routes = [
  { path: '', component: AppointmentHomeComponent },  // This is the home page for appointments
  { path: 'form', component: AppointmentFormComponent },
  { path: 'slots', component: SlotSelectionComponent },
  { path: 'confirm', component: ConfirmationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppointmentRoutingModule { }
