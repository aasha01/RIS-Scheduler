import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentService } from '../../services/appointment.service';
import { Appointment } from '../../models/appointment.model';

@Component({
  selector: 'app-appointment-home',
  standalone: false,
  templateUrl: './appointment-home.component.html',
  styleUrl: './appointment-home.component.css'
})
export class AppointmentHomeComponent implements OnInit {
  appointments: Appointment[] = [];
  loading = false;
  error: string | null = null;

  constructor(private router: Router, private appointmentService: AppointmentService) {}

  ngOnInit() {  
    console.log('AppointmentHomeComponent initialized');
    this.appointmentService.loadAppointments();
    this.appointmentService.getAppointments().subscribe(data => {
      this.appointments = data;
    });
    console.log('Appointments on init:', this.appointments);
  }

  calculateAge(dateOfBirth: string): number {
    if (!dateOfBirth) return 0;
    const dob = new Date(dateOfBirth);
    const diffMs = Date.now() - dob.getTime();
    const ageDt = new Date(diffMs);
    return Math.abs(ageDt.getUTCFullYear() - 1970);
  }

  goToForm() {
    // Navigate to the form page using Angular Router
    this.router.navigate(['appointments/form']);
  }
}
