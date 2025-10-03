import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppointmentRoutingModule } from './appointment-routing.module';
import { AppointmentHomeComponent } from './components/appointment-home/appointment-home.component';
import { AppointmentFormComponent } from './components/appointment-form/appointment-form.component';
import { SlotSelectionComponent } from './components/slot-selection/slot-selection.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';


@NgModule({
  declarations: [
    AppointmentHomeComponent,
    AppointmentFormComponent,
    SlotSelectionComponent,
    ConfirmationComponent
  ],
  imports: [
    CommonModule,
    AppointmentRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class AppointmentModule { }
