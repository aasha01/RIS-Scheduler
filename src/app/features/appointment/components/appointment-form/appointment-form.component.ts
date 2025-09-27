import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointment-form',
  standalone: false,
  templateUrl: './appointment-form.component.html',
  styleUrl: './appointment-form.component.css'
})
export class AppointmentFormComponent {
  constructor(private router: Router) {}

  goToAppointmentBookingPage() {
    // Navigate to the form page using Angular Router
    console.log('Navigating to slots page');
    this.router.navigate(['/appointments/slots']);
  }
}
