import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slot-selection',
  standalone: false,
  templateUrl: './slot-selection.component.html',
  styleUrl: './slot-selection.component.css'
})
export class SlotSelectionComponent {
  constructor(private router: Router) {}  

  bookAppointment() {
    console.log('Appointment slot booked!');
    // Here you would typically handle the booking logic, e.g., saving to a database or calling an API.
    //navigate to confirmation page
    this.router.navigate(['/appointments/confirm']);
  }
}
