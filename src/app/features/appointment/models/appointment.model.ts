
import { Timestamp } from 'rxjs';
import { Patient } from './patient.model';

export interface Appointment {
  patient: Patient;  
  physician: string;
  provider: string;
  exam: string;
  appointmentDate: string; // ISO date string
  slotDateTime?: string; // ISO date-time string (for booking page)
}
