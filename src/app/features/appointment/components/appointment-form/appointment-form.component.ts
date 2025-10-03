import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentService } from '../../services/appointment.service';

@Component({
  selector: 'app-appointment-form',
  standalone: false,
  templateUrl: './appointment-form.component.html',
  styleUrl: './appointment-form.component.css'
})
export class AppointmentFormComponent {
  appointmentData = {
    patientName: '',
    patientAge: 0,
    patientGender: '',
    physician: '',
    provider: '',
    appointmentDate: '',
    exam: ''
  };
  constructor(
    private router: Router,
    private appointmentService: AppointmentService
  ) {}

  goToAppointmentBookingPage() {
    // Save form data to the service
    this.appointmentService.setAppointmentData({
      patient: {
        firstName: '', // TODO: Bind to form input or update as needed
        lastName: this.appointmentData.patientName,
        phone: '', // TODO: Bind to form input or update as needed
        email: '', // TODO: Bind to form input or update as needed
        address: '', // TODO: Bind to form input or update as needed
        age: this.appointmentData.patientAge,
        gender: this.appointmentData.patientGender
      },
      physician: this.appointmentData.physician,
      provider: this.appointmentData.provider,
      appointmentDate: this.appointmentData.appointmentDate,
      exam: this.appointmentData.exam
    });

    this.router.navigate(['/appointments/slots']);
  }
}
