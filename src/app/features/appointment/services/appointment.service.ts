import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Appointment } from '../models/appointment.model';
import { Patient } from '../models/patient.model';

@Injectable({ providedIn: 'root' })

export class AppointmentService {
  
  private apiUrl = 'http://localhost:8081/appointments'; // Change to your actual backend URL

  private currentAppointmentSubject = new BehaviorSubject<Appointment>({
    patient: {} as Patient,
    physician: '',
    provider: '',
    exam: '',
    appointmentDate: '',
    slotDateTime: ''
  });
  currentAppointment$ = this.currentAppointmentSubject.asObservable();

  loading = false;
  error: string | null = null;
  appointment: Appointment | null = null;

  private appointmentsSubject = new BehaviorSubject<Appointment[]>([]);
  appointments$ = this.appointmentsSubject.asObservable();


  constructor(private http: HttpClient) {}

  // --- Setters for step forms ---
  setAppointmentData(appointment: Appointment) {
    const updated = {
      ...this.currentAppointmentSubject.value,
      ...appointment,
      patient: { ...appointment.patient }
    };
    this.currentAppointmentSubject.next(updated);
    console.log('Set appointment data:', updated);
  }

    setSlotData(slot: Appointment['slotDateTime']) {
      const current = this.currentAppointmentSubject.value;
      const updated = { ...current, slotDateTime: slot };
      this.currentAppointmentSubject.next(updated);
      console.log('Setting slot data:', updated);
    }

  createAppointment(appointment: Appointment): Observable<string> {
    return this.http.post(this.apiUrl, appointment, { responseType: 'text' });
  }

  // --- Save to backend ---
  saveAppointment() {
    const appointmentToSave = this.currentAppointmentSubject.value;
    console.log('Saving appointment to backend:', appointmentToSave);
    return this.http.post(this.apiUrl, appointmentToSave, { responseType: 'text' }).subscribe(responseMsg => {
      console.log('Backend response:', responseMsg);
      // Optionally, you can show this message to the user
      // reset temporary state
      this.currentAppointmentSubject.next({
        patient: {} as Patient,
        physician: '',
        provider: '',
        exam: '',
        appointmentDate: '',
        slotDateTime: ''
      });
    });
  }

  getAppointments(): Observable<Appointment[]>   {
    return this.appointments$;
  }

  getCurrentAppointment(): Appointment {
    return this.currentAppointmentSubject.value;
  }

  loadAppointments() {
    console.log('Loading appointments from API...');
    this.http.get<Appointment[]>(this.apiUrl).subscribe({
      next: (data) => {
        this.appointmentsSubject.next(data);
        console.log('Appointments loaded:', data);
      },
      error: (err) => {
        this.error = 'Failed to load appointments.';
        this.loading = false;
      }
    });
  }

  deleteAppointment(id: string | number): Observable<string> {
    return this.http.delete(`${this.apiUrl}/${id}`, { responseType: 'text' });
  }
}
