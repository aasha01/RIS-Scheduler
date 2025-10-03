import { Component } from '@angular/core';
import { AppointmentService } from '../../services/appointment.service';
import { Appointment } from '../../models/appointment.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  standalone: false,
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.css'
})
export class ConfirmationComponent {
  loading = false;
  error: string | null = null;
  appointment: Appointment | null = null;

  constructor(private router: Router, private appointmentService: AppointmentService) {}

  
}
