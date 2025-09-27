import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointment-home',
  standalone: false,
  templateUrl: './appointment-home.component.html',
  styleUrl: './appointment-home.component.css'
})
export class AppointmentHomeComponent {
  constructor(private router: Router) {}

  goToForm() {
    // Navigate to the form page using Angular Router
    console.log('Navigating to form page');
    this.router.navigate(['appointments/form']);
  }
}
