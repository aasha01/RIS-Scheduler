import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment } from '../../models/appointment.model';
import { AppointmentService } from '../../services/appointment.service';
@Component({
  selector: 'app-slot-selection',
  standalone: false,
  templateUrl: './slot-selection.component.html',
  styleUrl: './slot-selection.component.css'
})
export class SlotSelectionComponent {

  loading = false;
    error: string | null = null;
  appointment: Appointment | null = null;
  slotDateTime: string = '';
  
    constructor(private router: Router, private appointmentService: AppointmentService) {}
  

    // Book appointment using the current appointment from the service and selected slot
    bookAppointment() {
      // Get the current appointment from the service
      const current = this.appointmentService.getCurrentAppointment();
      if (!current) {
        this.error = 'No appointment data to save.';
        return;
      }
      // Set the slotDateTime in the service
      this.appointmentService.setSlotData(this.slotDateTime);
      this.loading = true;
      this.error = null;
      // Save the appointment
      this.appointmentService.saveAppointment();
      this.appointmentService.loadAppointments();
      this.loading = false;
      this.router.navigate(['/appointments']);
      console.log('Completed booking');
    }
}
