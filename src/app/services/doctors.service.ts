

  import { Injectable } from '@angular/core';
import { Doctor } from '../models/doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {

  doctors: Doctor[] = [
    {
      id: 1,
      name: "Dr. Sara Al-Rashidi",
      specialty: "Cardiology",
      rating: 4.9,
      experience: 14,
      fee: 60,
      available: true,
      availableDays: ["Sunday", "Tuesday", "Thursday"]
    },
    {
      id: 2,
      name: "Dr. Omar Khalil",
      specialty: "General Medicine",
      rating: 4.5,
      experience: 8,
      fee: 30,
      available: true,
      availableDays: ["Sunday", "Monday", "Wednesday"]
    }
  ];

  getDoctors(): Doctor[] {
    return this.doctors;
  }

  getBySpecialty(specialty: string): Doctor[] {
    return this.doctors.filter(d => d.specialty === specialty);
  }
}

